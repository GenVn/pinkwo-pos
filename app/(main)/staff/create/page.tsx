import AddStaffDialog from "@/components/layout/add-staff-dialog";
import TopBar from "@/components/layout/top-bar";
import React from "react";

export default function CreateStaffPage() {
  return (
    <main className="container p-4">
      <TopBar />
      <AddStaffDialog />
    </main>
  );
}
