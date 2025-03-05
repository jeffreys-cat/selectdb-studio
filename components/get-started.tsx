"use client";

import { useToast } from "@/hooks/use-toast";
import ShinyButton from "./magicui/shiny-button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export function GET() {
  const { toast } = useToast();

  return (
    <Link
      href={`https://test-cdn-selectdb.oss-cn-beijing.aliyuncs.com/selectdb-studio/SelectDB%20Studio-1.0.0-alpha.24-arm64.dmg`}
      download
    >
      <ShinyButton>下载 Mac Alpha</ShinyButton>
    </Link>
  );
}
