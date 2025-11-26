import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { skills } from "@/lib/skills";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 md:px-16 text-white">
      <h1 className="text-5xl text-secondary font-bold mb-10">Tech Stack</h1>

      {/* Skill Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((item) => (
          <div
            key={item.id}
            className="space-y-3 rounded-xl p-6 glassyBg text-white 
              transition-all duration-300 cursor-pointer
              hover:bg-[rgba(40,40,40,0.45)]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.45),inset_0_0_25px_rgba(255,255,255,0.06)]
              hover:scale-[1.04]
              backdrop-blur-xl border border-white/10"
          >
            <p className="text-lg font-semibold text-center">{item.name}</p>

            <div className="flex items-center justify-center mb-4 w-32 h-32 mx-auto bg-black rounded-xl">
              <Image src={item.logo} alt={item.name} width={64} height={64} className="opacity-90 w-16 h-16" />
            </div>

            <p className="text-sm text-gray-300 text-center mt-1">{item.proficiency}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TechStack;
