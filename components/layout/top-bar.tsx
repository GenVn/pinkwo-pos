"use client";

import { ChevronLeft, ClipboardPlus } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import BackBtn from "../utils/back-btn";

const TitleMapping = {
  "/": "Trang chủ",
  "/orders": "Đơn hàng",
  "/menu": "Thực đơn",
  "/staff": "Nhân viên",
  "/statistics": "Thống kê",
  "/attendance": "Chấm công",
  "/fund-transfer": "Chuyển quỹ",
  "/staff/create": "Thêm nhân viên",
  "/staff/modify": "Sửa nhân viên",
};

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="flex items-center gap-2 h-12 bg-background border-b shadow-sm">
      <BackBtn />
      <div className="flex-1 text-lg font-semibold">
        {TitleMapping[pathname as keyof typeof TitleMapping]}
      </div>
      <div
        className={cn("flex justify-end", pathname !== "/orders" && "hidden")}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            router.push(pathname + "/create-order");
          }}
        >
          <ClipboardPlus className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
