"use client";
import FormPost from "@/components/FormPost";
import ButtonBack from "@/components/button/ButtonBack";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const CreatePage = () => {
  const router = useRouter()

  // const addDataMutation = useMutation(addExperience, {
  //   onSuccess: () => {
  //     // Invalidates cashe and refetch
  //     queryClient.invalidateQueries("experience");
  //   },
  // });

  const { mutate: createPost, isLoading} = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post('/api/posts/create', newPost)
    },
    onError: (error) => {
      console.log(error);      
    },
    onSuccess: () => {
      router.push('/')
      router.refresh()
      router.back()
    }
  })


  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data)    
  };


  return (
    <div>
      <ButtonBack/>
      <h1 className="text-2xl my-4 font-bold text-center">Add New Post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
