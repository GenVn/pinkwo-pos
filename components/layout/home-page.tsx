"use client";

import {
  CalendarArrowDown,
  ChartNoAxesCombined,
  ChevronRight,
  Home,
  PiggyBank,
  Pizza,
  ReceiptText,
  UserRound,
} from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUserStore } from "@/stores/user";

const NavItems = [
  {
    icon: CalendarArrowDown,
    label: "Đơn hàng",
    href: "/orders",
  },
  {
    icon: Pizza,
    label: "Thực đơn",
    href: "/menu",
  },
  {
    icon: UserRound,
    label: "Nhân viên",
    href: "/staff",
  },
  {
    icon: ChartNoAxesCombined,
    label: "Thống kê",
    href: "/statistics",
  },
  {
    icon: ReceiptText,
    label: "Chấm công",
    href: "/attendance",
  },
  {
    icon: PiggyBank,
    label: "Chuyển quỹ",
    href: "/fund-transfer",
  },
];

export function HomePage() {
  const router = useRouter();
  const user = useUserStore((state) => state.users);
  const isLoggedIn = !!user;

  const handleNavigation = (href: string) => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push(href);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Header */}
      <header className="mb-4">
        <h1 className="text-xl font-bold text-pink-600">Pinkwo POS</h1>
        <p className="text-sm text-gray-500">Pinkwo POS - Quản lý bán hàng</p>
      </header>
      {/* Số dư ví */}
      <section className="mb-4">
        <div className="p-4 bg-white rounded-lg shadow space-y-2">
          <h2 className="text-lg font-semibold">Số dư ví</h2>
          {isLoggedIn ? (
            <>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(0)}
                </p>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="default"
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => handleNavigation("/receive-money")}
                >
                  Nhận tiền
                </Button>
                <Button
                  variant="default"
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => handleNavigation("/fund-transfer")}
                >
                  Chuyển tiền
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500 mb-2 font-bold">
                Đăng nhập để sử dụng POS
              </p>
              <Button
                variant="default"
                className="w-full bg-pink-500 hover:bg-pink-600"
                onClick={() => router.push("/login")}
              >
                Đăng nhập
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Menu Navigation */}
      <section className="grid grid-cols-2 gap-4 mb-4 text-center text-sm">
        {NavItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleNavigation(item.href)}
            className="p-2 flex flex-col gap-2 items-center bg-zinc-50 rounded-2xl cursor-pointer"
          >
            <item.icon className="w-8 h-8 mx-auto mb-1 font-normal text-gray-600" />
            <span className="font-semibold text-gray-600">{item.label}</span>
          </div>
        ))}
      </section>
      <footer
        className="fixed bottom-0 left-0 right-0 bg-white border-t flex \
      justify-around text-xs font-semibold text-gray-500 py-2 px-3"
      >
        <div
          onClick={() => handleNavigation("/")}
          className="flex flex-col gap-2 items-center cursor-pointer"
        >
          <Home className="w-6 h-6" />
          Trang chủ
        </div>
        <div
          onClick={() => handleNavigation("/orders")}
          className="flex flex-col gap-2 items-center cursor-pointer"
        >
          <Pizza className="w-6 h-6" />
          Đơn hàng
        </div>
        <div
          onClick={() => handleNavigation("/attendance")}
          className="flex flex-col gap-2 items-center cursor-pointer"
        >
          <ReceiptText className="w-6 h-6" />
          Chấm Công
        </div>
        <div
          onClick={() => handleNavigation(isLoggedIn ? "/profile" : "/login")}
          className="flex flex-col gap-2 items-center cursor-pointer"
        >
          {isLoggedIn && user?.avatar ? (
            <Image
              src={user.avatar}
              alt="User Avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <UserRound className="w-6 h-6" />
          )}
          {isLoggedIn ? "Profile" : "Đăng nhập"}
        </div>
      </footer>
    </div>
  );
}
