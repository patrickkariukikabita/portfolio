import LampDemo from "@/components/ui/lamp";
import Founder from "@/components/ui/founder";
import TitleWriter from "@/components/ui/titlewriter";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 
     bg-gray-900  w-screen py-24 select-none">
        {/* the text div */}
    <div className="absolute top-4 z-50 flex   items-center px-5">
    <TitleWriter/>
    </div>

       <div className="flex justify-center items-center h-96 my-8 w-full ">
       <LampDemo/>
       </div>
       <div className="flex justify-center items-center h-96 md:h-80 
        my-8 w-full absolute -translate-y-14 md:-translate-y-6 z-50">
       <Founder/>
       </div>

    </main>
  );
}
