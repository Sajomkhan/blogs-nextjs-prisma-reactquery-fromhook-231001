"use client";
import { FormInputPost } from "@/types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    formState: { errors },
  } = useForm<FormInputPost>();

  // fetch tags list
  const { data: dataTags, isLoading: isloadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });


  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      {/* --------Title Input--------- */}
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

      {/* --------Content Input--------- */}
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

      {/* --------Select Input--------- */}
      {isloadingTags ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        <select
          {...register("tagId", {
            required: "Seclect the Tag",
          })}
          className="select select-bordered w-full max-w-lg"
          defaultValue=""
        >
          <option disabled value="">
            Select tag
          </option>
          {dataTags?.map((tags) => (
            <option key={tags.id}>{tags.name}</option>
          ))}
        </select>
      )}

      {errors.tagId?.message && (
        <p className="text-red-500">{errors.tagId?.message}</p>
      )}

      <button className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
