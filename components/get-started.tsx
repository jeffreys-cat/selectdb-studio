"use client";

import { useToast } from "@/hooks/use-toast";
import ShinyButton from "./magicui/shiny-button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";
import { downloadUrl } from "@/lib/app-config";

export function GET() {
  const { toast } = useToast();

  return (
    <Link
      href={downloadUrl}
      download
    >
      <ShinyButton>下载 Mac Alpha</ShinyButton>
    </Link>
  );
}
