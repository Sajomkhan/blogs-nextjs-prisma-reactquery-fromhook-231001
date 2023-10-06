import { Tag } from "@prisma/client";
import Link from "next/link";
import React, { FC } from "react";

interface PostCardsProps {
  post: {
    id: string,
    title: string,
    content: string,
    // tag: Tag
  }
}

const PostCards: FC<PostCardsProps> = ({ post}) => {


  const { id, title, content,  } = post

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
        {/* <span className="badge badge-neutral">{tag?.name}</span> */}
          <Link href={`/blog/${id}`} className="hover:underline">Read more...</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
