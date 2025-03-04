"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <Card className="border-none">
      <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
        <CardHeader>
          <CardTitle>内部员工测试</CardTitle>
          <CardDescription>
            Aplha 版本测试，您的反馈将帮助我们打造更好的产品。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <li>提交功能建议和改进意见</li>
          <li>报告使用过程中遇到的问题</li>
          <li>参与新功能的早期测试</li>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
