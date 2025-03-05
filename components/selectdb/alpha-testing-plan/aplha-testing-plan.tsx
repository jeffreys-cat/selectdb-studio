import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { MagicCardDemo } from "./test-card";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { downloadUrl } from "@/lib/app-config";
import Link from "next/link";
import Image from "next/image";

export function AlphaTestingPlan() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 py-8">
      <NeonGradientCard className="p-0 max-w-lg items-center justify-center text-center">
        {/* <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          内部员工测试
        </span> */}
        <CardHeader>
          <CardTitle>内部员工测试</CardTitle>
          <CardDescription>
            Alpha 版本测试，您的反馈将帮助我们打造更好的产品。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-4 mx-auto">
            <li className="mt-1">提交功能建议和改进意见</li>
            <li className="mt-1">报告使用过程中遇到的问题</li>
            <li className="mt-1">参与新功能的早期测试</li>
          </div>
          {/* <ul className="text-left">  */}

          <div className="mt-4 flex justify-center">
            <Image
              className="mt-4 text-center"
              src="/feishu.png"
              alt="feishu"
              width={200}
              height={200}
            />
          </div>

          {/* </ul> */}
        </CardContent>

        <CardFooter>
          <Link className="w-full" href={downloadUrl} download>
            <Button className="w-full">立即下载</Button>
          </Link>
        </CardFooter>
        {/* <MagicCardDemo /> */}
      </NeonGradientCard>

      {/* <Image src="/feishu.png" alt="feishu" width={200} height={200} /> */}

      {/* <CardSpotlightDemo /> */}
      {/* <div>
        扫描二维码加入内部交流群，您的反馈将帮助我们打造更好的产品。
        提交功能建议和改进意见 报告使用过程中遇到的问题 参与新功能的早期测试
      </div> */}

      {/* <h1>Welcome to AplhaTestingPlan!</h1> */}
    </div>
  );
}
