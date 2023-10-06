import PostCards from "@/components/PostCards";
import { prismadb } from "@/libs/prismadb";

async function getPosts() {
  const response = await prismadb.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      // tag: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);
  

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post) => (
        <PostCards key={post.id} post={post} />
      ))}
    </main>
  );
}
