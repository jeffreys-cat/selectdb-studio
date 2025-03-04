import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Calendar, Share2Icon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import AnimatedListDemo from "./animatelist-demo";
import AnimatedBeamMultipleOutputDemo from "./animatedbeam";
import { Marquee } from "./marquee";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "智能 SQL 编辑器",
    description:
      "专为 Doris 语法设计，提供实时语法高亮与自动补全，让 SQL 编写更高效。",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: (
      <div></div>
      // <Marquee className="absolute [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      //   <Image src={"/sql.png"} alt="SQL Editor" width={500} height={300} />
      // </Marquee>
      // <Image src={'@/public/images/sql.png'} />
      // </div>
      //   <Marquee
      //     pauseOnHover
      //     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      //   >
      //     {files.map((f, idx) => (
      //       <figure
      //         key={idx}
      //         className={cn(
      //           "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
      //           "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      //           "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      //           "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
      //         )}
      //       >
      //         <div className="flex flex-row items-center gap-2">
      //           <div className="flex flex-col">
      //             <figcaption className="text-sm font-medium dark:text-white ">
      //               {f.name}
      //             </figcaption>
      //           </div>
      //         </div>
      //         <blockquote className="mt-2 text-xs">{f.body}</blockquote>
      //       </figure>
      //     ))}
      //   </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "可视化 Profile",
    description: "直观展示查询执行计划，帮助快速定位性能瓶颈，优化 SQL 语句。",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div></div>
      //   <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "会话管理",
    description: "实时监控会话状态，支持终止异常连接。保障系统稳定运行。",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: <div></div>,
  },
  {
    Icon: Share2Icon,
    name: "日志检索与可视化分析",
    description:
      "基于 Doris 日志存储，支持快速全文搜索和多维度过滤，并通过直观图表展示日志趋势，兼容 Variant 类型。",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div></div>
      // <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "审计日志查看",
    description: "一键查询审计日志，跟踪操作历史，强化数据安全和合规性。",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: <div></div>,
  },
  {
    Icon: FileTextIcon,
    name: "导入任务",
    description:
      "可视化查看导入任务，浏览导入任务的运行进度和状态",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: <div></div>,
  },
  // {
  //   Icon: FileTextIcon,
  //   name: "数据浏览与导入",
  //   description:
  //     "支持 catalog、数据库、表字段结构和数据预览，简化数据探索流程，同时支持高效的CSV/JSON数据导入。",
  //   href: "#",
  //   cta: "Learn more",
  //   className: "col-span-4 lg:col-span-1",
  //   background: <div></div>,
  // },
  {
    Icon: FileTextIcon,
    name: "安全合规",
    description:
      "不存储用户数据，不上传云端，确保数据安全与隐私，满足企业级安全合规要求。",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: <div></div>,
  },
  {
    Icon: FileTextIcon,
    name: "多连接与SSH隧道",
    description:
      "支持同时连接多个Doris数据库，并提供SSH隧道功能，安全访问内网环境中的数据库资源。",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: <div></div>,
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
