import { Footer } from "@/components/footer";
import { GlobalBg } from "@/components/global-bg";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <Navbar />
      <GlobalBg />
      <div className=" flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8 justify-center">
          <div className="opacity-95 w-full ">
            <div className="text-global">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
