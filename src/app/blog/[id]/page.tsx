import ButtonBack from "@/components/button/ButtonBack";
import ButtonComponent from "@/components/button/ButtonComponent";
import { prismadb } from "@/libs/prismadb";
import { Pen, Trash } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface SingleBlogProps {
  params: {
    id: string
  }
}

async function getPost(id: string) {
  const response = await prismadb.post.findFirst({
    where: {
      id: id
    },
    select: {
      id: true,
      title: true,
      content: true,
      // tag: true
    }
  })
  return response
}

const SingleBlog: FC<SingleBlogProps> = async({ params }) => {

const post = await getPost(params.id)

  return (
    <div>
      <ButtonBack/>
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
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
      {/* <span className="badge badge-neutral">{post?.tag.name}</span> */}
      <p className="text-slate-700">{post?.content}</p>
    </div>
  );
};

export default SingleBlog;
