import { allBlogs as metaList } from "contentlayer/generated";
import Article from "./article";
import Toc from "./toc";

const allBlogs = metaList
  .filter((blog) => blog.slug !== "about")
  .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => {
    return blog.slug === params.slug;
  });

  if (!blog) {
    return { title: "404 - Page Not Found" };
  }
  return { title: blog.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  let curIndex = 0;
  const blog = allBlogs.find((blog, index) => {
    curIndex = index;
    return blog.slug === params.slug;
  });

  const nextBlog = allBlogs[curIndex + 1];
  const preBlog = allBlogs[curIndex - 1];
  return (
    <div className="flex mx-auto py-8 prose prose-slate relative">
      <Article blog={blog} preBlog={preBlog} nextBlog={nextBlog} />
      <Toc />
    </div>
  );
};

export default PostLayout;
