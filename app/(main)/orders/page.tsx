"use client";
import TabsBar from "@/components/layout/tabs-bar";
import TopBar from "@/components/layout/top-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

export default function OrdersPage() {
  const Tabs = ["Đang chuẩn bị", "Đã hoàn thành", "Sắp tới", "Lịch sử"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="container p-4">
      <TopBar />
      <TabsBar Tabs={Tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="mt-4 flex flex-col gap-4">
        {/* First order */}
        <Link href="/orders/pw-001" className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-bold">Nguyễn Văn Tèo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">PW-001</span>
            <Button
              variant="default"
              className="rounded-xl font-bold relative bg-orange-500"
            >
              Đang chuẩn bị
              <span className="absolute -bottom-4 w-4 h-4 text-red-500 font-bold rounded-full">
                3:40
              </span>
            </Button>
          </div>
          <div className="flex gap-2 flex-col font-bold">
            <span>Bánh mì thịt x3</span>
            <span>Bánh Hamburger bò x2</span>
          </div>
        </Link>
      </section>
    </main>
  );
}
