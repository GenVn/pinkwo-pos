"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <ChevronLeft className="w-4 h-4" />
    </Button>
  );
}
