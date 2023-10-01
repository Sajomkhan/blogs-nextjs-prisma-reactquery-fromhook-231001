import ButtonBack from "@/components/button/ButtonBack";
import ButtonComponent from "@/components/button/ButtonComponent";
import { Pen, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const SingleBlog = () => {
  return (
    <div>
      <ButtonBack/>
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post Details</h2>
        <div className="flex items-center">
          <Link href="/edit/1" className="btn mr-3">
            <Pen size={20} />
            Edit Post
          </Link>
          <ButtonComponent
            className={"btn btn-error"}
            name={"delete"}
            icon={<Trash size={20} />}
          />
        </div>
      </div>
      <p className="text-slate-700">Post one content</p>
    </div>
  );
};

export default SingleBlog;
