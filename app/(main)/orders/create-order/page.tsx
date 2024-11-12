import React from "react";
import CreateOrderForm from "@/components/layout/create-order-form";
import BackBtn from "@/components/utils/back-btn";
import { fetchBundles } from "@/lib/api/get-bundles";
import { fetchAllBundleDetails } from "@/lib/api/get-all-bundles-details";

export default async function CreateOrder() {
  const bundles = await fetchBundles();
  //   const allBundleDetails = await fetchAllBundleDetails();
  //   console.log(allBundleDetails);
  return (
    <main className="container p-4">
      <header className="w-full flex items-center gap-4">
        <BackBtn />
        <span className="text-xl font-bold">Tạo đơn hàng</span>
      </header>
      <CreateOrderForm bundles={bundles} />
    </main>
  );
}
