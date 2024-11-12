"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import { PhoneCall, Printer } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BackBtn from "@/components/utils/back-btn";

interface OrderDetailPageProps {
  params: {
    "order-detail": string;
  };
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  options: {
    size?: string;
    ingredients?: string[];
    sauce?: string;
  };
}

const orderItems: OrderItem[] = [
  {
    id: "1",
    name: "Bánh mì thịt",
    price: 25000,
    image: "/banh-mi.jpg",
    options: {
      size: "Lớn",
      ingredients: ["Thịt", "Rau", "Đồ chua"],
      sauce: "Tương ớt",
    },
  },
  {
    id: "2",
    name: "Hamburger bò",
    price: 45000,
    image: "/hamburger.jpg",
    options: {
      size: "Vừa",
      ingredients: ["Bò", "Phô mai", "Rau"],
      sauce: "Sốt BBQ",
    },
  },
];

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  const router = useRouter();
  const [isPrintDialogOpen, setIsPrintDialogOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:0909090909";
  };

  const handlePrint = () => {
    window.print();
    setIsPrintDialogOpen(false);
  };

  return (
    <main className="container p-4">
      <header className="w-full flex justify-between items-center">
        <BackBtn />
        <span className="text-2xl font-bold">PW-001</span>
        <Dialog open={isPrintDialogOpen} onOpenChange={setIsPrintDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size={"icon"}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Printer className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Xác nhận in đơn hàng</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Nội dung in:</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Mã đơn hàng: PW-001</p>
                <p>
                  Tổng tiền:{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(
                    orderItems.reduce((acc, item) => acc + item.price, 0)
                  )}
                </p>
                <p>Số lượng món: {orderItems.length}</p>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <Button
                variant="outline"
                onClick={() => setIsPrintDialogOpen(false)}
              >
                Hủy
              </Button>
              <Button onClick={handlePrint}>Xác nhận in</Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>
      <section className="mt-4 flex flex-col gap-4">
        <span className="text-lg font-bold">Giao hàng</span>
        <div className="flex gap-4 flex-col">
          <div className="flex items-center gap-4">
            <Button className="bg-green-500 text-white rounded-xl">
              Tài xế giao hàng
            </Button>
            <Button
              className="bg-blue-500 text-white rounded-xl"
              onClick={handleCall}
            >
              Gọi điện
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="Tài xế" />
              <AvatarFallback>Tài xế</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold">Nguyen Van A</span>
              <span className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" /> 0909090909
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 flex flex-col gap-4">
        <span className="text-lg font-bold">Ghi chú</span>
        <p className="bg-gray-50 p-4 rounded-lg text-lg">
          Cho xin thêm rau sống và đồ chua
        </p>
      </section>
      <section className="mt-4 flex flex-col gap-4">
        <span className="text-lg font-bold">Chi tiết đơn</span>
        <div className="flex flex-col gap-4">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold">{item.name}</h3>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex flex-col gap-2">
                <span className="text-lg flex gap-2">
                  Kích thước:{" "}
                  <p className="font-bold text-gray-700">{item.options.size}</p>
                </span>
                {item.options.ingredients && (
                  <span className="text-lg flex gap-2">
                    Nguyên liệu:{" "}
                    <p className="font-bold text-gray-700">
                      {item.options.ingredients.join(", ")}
                    </p>
                  </span>
                )}
                {item.options.sauce && (
                  <span className="text-lg flex gap-2">
                    Sốt:{" "}
                    <p className="font-bold text-gray-700">
                      {item.options.sauce}
                    </p>
                  </span>
                )}
              </div>
              <span className="font-bold text-lg">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price)}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-4 flex gap-4">
        <span className="text-lg font-bold">Tổng tiền</span>
        <span className="font-bold text-lg">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(orderItems.reduce((acc, item) => acc + item.price, 0))}
        </span>
      </section>
    </main>
  );
}
