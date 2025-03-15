import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { dayTz } from "@/lib/day-tz";
import { Calendar, Clock8 } from "lucide-react";
import Tag from "@/components/tag";
import { Blog } from "contentlayer/generated";
export default function BLogList({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
      {blogs.map((blog) => {
        return (
          <Card
            className="p-2 hover:shadow-lg hover:scale-105 cursor-pointer duration-500 z-10"
            key={blog._id}
          >
            <Link href={blog.url} prefetch>
              <CardContent>
                <h2 className="text-xl pb-2 pt-2">{blog.title}</h2>
                <div className="secText">
                  <div className="flex flex-wrap">
                    {blog.tags.map((tag: string) => (
                      <Tag key={`${tag}${Math.random()}`}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="mb-1 ">- {blog.description}</div>
                  <div className=" mb-1  text-xs  flex  items-center">
                    <Calendar
                      className="inline-block m-0 p-0  text-xs mr-1"
                      width="0.8215rem"
                      height="0.8215rem"
                    />
                    <time dateTime={blog.date}>
                      {dayTz(blog.date).format("YYYY-MM-DD")}
                    </time>
                    <span className="mx-2">|</span>
                    <Clock8
                      className="inline-block m-0 p-0  text-xs mr-1"
                      width="0.8215rem"
                      height="0.8215rem"
                    />
                    <span>{Math.ceil(blog.readingTime.minutes)}分钟</span>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
