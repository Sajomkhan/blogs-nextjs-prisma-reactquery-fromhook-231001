"use client";
import { FormInputPost } from "@/types";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing?: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 4,
            message: "Minimum length is 4",
          },
          maxLength: 100,
        })}
        type="text"
        placeholder="Post title"
        className="input input-bordered w-full max-w-lg"
      />

      {errors.title?.message && (
        <p className="text-red-500">{errors.title?.message}</p>
      )}

      <textarea
        {...register("content", {
          required: "Content is required",
          minLength: {
            value: 4,
            message: "Minimum length is 4",
          },
          maxLength: 1000,
        })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content"
      ></textarea>

      {errors.content?.message && (
        <p className="text-red-500">{errors.content?.message}</p>
      )}

      <select
        {...register("tag", {
          required: "Seclect the Tag",
        })}
        className="select select-bordered w-full max-w-lg"
        defaultValue=""
      >
        <option disabled value="">
          Select tag
        </option>
        <option>JavaScript</option>
        <option>PHP</option>
        <option>Python</option>
      </select>

      {errors.tag?.message && (
        <p className="text-red-500">{errors.tag?.message}</p>
      )}

      <button className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
