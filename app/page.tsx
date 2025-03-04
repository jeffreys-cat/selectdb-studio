import { DownloadButton } from "@/components/animated-download-button";
import { GET } from "@/components/get-started";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Video } from "@/components/ui/video";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import CanvasCursor from "@/components/CanvasCursor";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";
import { CoolModeBuuton } from "@/components/selectdb/coolmode";
import { BentoDemo } from "@/components/selectdb/bento/bento";
import { AplhaTestingPlan } from "@/components/selectdb/aplha-testing-plan/aplha-testing-plan";
import { MacbookScroll } from "@/components/selectdb/macbook-scroll";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export default function Home() {
  return (
    <>
      <div className="relative flex sm:min-h-[71vh] min-h-[68vh] flex-col items-center justify-center text-center px-2 py-8">
      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
        <Link
          href=""
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline-offset-4"
        >
          内测版本
          {/* <MoveUpRightIcon className="w-4 h-4 font-extrabold" /> */}
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">SelectDB Studio</h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          It is designed to be simple and easy to understand for beginners.
        </p>
        <div className="flex flex-row items-center gap-5">
          <GET />
          <CanvasCursor />
          <CoolModeBuuton />
          {/* <DownloadButton /> */}
        </div>
        {/* <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
          <TerminalIcon className="w-4 h-4 mr-1" /> ~ git init
        </span> */}
      </div>
      {/* <div className="pb-20">
        <MacbookScroll />
      </div> */}
      <div className="mb-20">
        <BentoDemo />
      </div>
      <div className="mb-20">
        <AplhaTestingPlan />
      </div>
      {/* <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Video />
        <BorderBeam size={250} duration={12} delay={9} />
      </div> */}
    </>
  );
}
