import OneSentence from "@/components/one-sentence";
import SideActions from "./side-actions";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-2 flex pr-2">
      <div className="w-full  px-4 ">
        <div className=" flex flex-col  justify-center items-center ">
          <h1 className="font-bold text-2xl">欢迎来到我的博客</h1>
          <OneSentence />
        </div>

        {children}
      </div>
      <div className="hidden md:flex max-w-[200px]">
        <SideActions />
      </div>
    </div>
  );
}
