"use client";
import TabsBar from "@/components/layout/tabs-bar";
import TopBar from "@/components/layout/top-bar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function MenuPage() {
  const Tabs = ["Món ăn", "Đồ uống", "Tùy chọn nhóm"];
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    { id: 1, name: "Bánh mì thịt", price: 25000, image: "/banh-mi-thit.jpg" },
    { id: 2, name: "Phở bò", price: 40000, image: "/pho-bo.jpg" },
    { id: 3, name: "Gỏi cuốn", price: 30000, image: "/goi-cuon.jpg" },
  ];
  const drinks = [
    { id: 4, name: "Coca cola", price: 15000, image: "/coca-cola.jpg" },
    { id: 5, name: "Pepsi", price: 15000, image: "/pepsi.jpg" },
  ];
  const options = [
    { id: 6, name: "Gà xé", price: 0, image: "/ga-xe.jpg" },
    { id: 7, name: "Thịt viên", price: 0, image: "/thit-vien.jpg" },
    { id: 8, name: "Dưa leo", price: 0, image: "/dua-leo.jpg" },
    { id: 9, name: "Đồ chua", price: 0, image: "/do-chua.jpg" },
    { id: 10, name: "Sốt cà chua", price: 0, image: "/sot-ca-chua.jpg" },
    { id: 12, name: "Tương ớt", price: 0, image: "/tuong-ot.jpg" },
  ];

  const [activeProducts, setActiveProducts] = useState(
    products.map((product) => product.id)
  );
  const [activeDrinks, setActiveDrinks] = useState(
    drinks.map((drink) => drink.id)
  );
  const [activeOptions, setActiveOptions] = useState(
    options.map((option) => option.id)
  );

  const toggleProduct = (productId: number) => {
    setActiveProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  const toggleDrink = (drinkId: number) => {
    setActiveDrinks((prev) =>
      prev.includes(drinkId)
        ? prev.filter((id) => id !== drinkId)
        : [...prev, drinkId]
    );
  };
  const toggleOption = (optionId: number) => {
    setActiveOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  return (
    <main className="container p-4">
      <TopBar />
      <TabsBar Tabs={Tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Food Group */}
      <section
        className={cn("mt-4 flex flex-col gap-4", activeTab !== 0 && "hidden")}
      >
        <h2 className="text-2xl font-bold">Món ăn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="flex flex-col flex-grow">
                  <CardTitle className="mb-2 font-semibold ">
                    {product.name}
                  </CardTitle>
                  <div className="flex flex-col gap-2 w-full">
                    <span className="font-bold">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </span>
                    <Switch
                      checked={activeProducts.includes(product.id)}
                      onCheckedChange={() => toggleProduct(product.id)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Drink Group */}
      <section
        className={cn("mt-4 flex flex-col gap-4", activeTab !== 1 && "hidden")}
      >
        <h2 className="text-2xl font-bold">Đồ uống</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drinks.map((drink) => (
            <Card key={drink.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="flex flex-col flex-grow">
                  <CardTitle className="mb-2 font-semibold ">
                    {drink.name}
                  </CardTitle>
                  <div className="flex flex-col gap-2 w-full">
                    <span className="font-bold">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(drink.price)}
                    </span>
                    <Switch
                      checked={activeDrinks.includes(drink.id)}
                      onCheckedChange={() => toggleDrink(drink.id)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Option Group */}
      <section
        className={cn("mt-4 flex flex-col gap-4", activeTab !== 2 && "hidden")}
      >
        <h2 className="text-2xl font-bold">Tùy chọn nhóm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {options.map((option) => (
            <Card key={option.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <Image
                  src={option.image}
                  alt={option.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="flex flex-col flex-grow">
                  <CardTitle className="mb-2 font-semibold ">
                    {option.name}
                  </CardTitle>
                  <div className="flex flex-col gap-2 w-full">
                    <span className="font-bold">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(option.price)}
                    </span>
                    <Switch
                      checked={activeOptions.includes(option.id)}
                      onCheckedChange={() => toggleOption(option.id)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
