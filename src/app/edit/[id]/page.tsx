'use client'
import FormPost from "@/components/FormPost";
import { SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types";
import ButtonBack from "@/components/button/ButtonBack";

const EditPost = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);   
  };

  return (
    <div>
      <ButtonBack/>
      <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
};
export default EditPost;
