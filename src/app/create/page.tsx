"use client";
import FormPost from "@/components/FormPost";
import ButtonBack from "@/components/button/ButtonBack";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {};

  return (
    <div>
      <ButtonBack/>
      <h1 className="text-2xl my-4 font-bold text-center">Add New Post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
