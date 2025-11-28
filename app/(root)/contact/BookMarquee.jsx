import { Marquee } from "@/components/ui/marquee";

const BookMarquee = () => {
  return (
    <div className="mt-24 glassyBg rounded-full ">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-full py-12">
        <Marquee pauseOnHover className="[--duration:5s]">
          <div className="flex flex-row items-center gap-2 text-8xl text-muted">
            Book A Call
            <sapn className="text-chart-1 list-disc">
              <div className="w-5 h-5 bg-chart-1 rounded-full"></div>
            </sapn>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BookMarquee;
