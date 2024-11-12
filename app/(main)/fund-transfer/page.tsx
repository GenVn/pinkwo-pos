"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopBar from "@/components/layout/top-bar";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function FundTransferPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [expandedShifts, setExpandedShifts] = useState<number[]>([]);
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [currentStaff, setCurrentStaff] = useState("Nguyễn Văn A");
  const [nextStaff, setNextStaff] = useState("Nguyễn Văn B");

  // This would normally come from an API or state management
  const shifts = [
    {
      id: 1,
      total: 1500000,
      startTime: "06:00",
      endTime: "14:00",
      status:
        selectedDate?.getDate() === new Date().getDate()
          ? new Date().getHours() >= 14
            ? "ended"
            : new Date().getHours() >= 6
            ? "current"
            : "incoming"
          : selectedDate && selectedDate < new Date()
          ? "ended"
          : "incoming",
    },
    {
      id: 2,
      total: 2000000,
      startTime: "14:00",
      endTime: "22:00",
      status:
        selectedDate?.getDate() === new Date().getDate()
          ? new Date().getHours() >= 22
            ? "ended"
            : new Date().getHours() >= 14
            ? "current"
            : "incoming"
          : selectedDate && selectedDate < new Date()
          ? "ended"
          : "incoming",
    },
    {
      id: 3,
      total: 1800000,
      startTime: "22:00",
      endTime: "06:00",
      status:
        selectedDate?.getDate() === new Date().getDate()
          ? new Date().getHours() >= 22
            ? "current"
            : new Date().getHours() >= 6
            ? "incoming"
            : "ended"
          : selectedDate && selectedDate < new Date()
          ? "ended"
          : "incoming",
    },
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case "ended":
        return "Đã kết thúc";
      case "current":
        return "Đang diễn ra";
      case "incoming":
        return "Sắp tới";
      default:
        return "";
    }
  };

  const toggleShiftExpansion = (shiftId: number) => {
    setExpandedShifts((prev) =>
      prev.includes(shiftId)
        ? prev.filter((id) => id !== shiftId)
        : [...prev, shiftId]
    );
  };

  // Sort shifts to move the current shift to the top
  const sortedShifts = [...shifts].sort((a, b) => {
    if (a.status === "current") return -1;
    if (b.status === "current") return 1;
    return 0;
  });

  const handleTransferConfirm = () => {
    // Handle the transfer confirmation logic here
    toast.success("Chuyển tiền ca thành công");
    setIsTransferDialogOpen(false);
  };

  return (
    <main className="container p-4">
      <TopBar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Chuyển tiền ca</h1>

        <div className="mb-6 w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="h-4 w-4" />
                {selectedDate ? (
                  format(selectedDate, "PPP", { locale: vi })
                ) : (
                  <span>Chọn ngày</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {sortedShifts.map((shift) => (
          <Card
            key={shift.id}
            className={cn(
              "mb-4",
              shift.status === "current"
                ? "border-green-600"
                : "border-yellow-600"
            )}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex justify-between items-center">
                <span>Ca làm {shift.id}</span>
                {shift.status !== "current" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleShiftExpansion(shift.id)}
                  >
                    {expandedShifts.includes(shift.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            {(shift.status === "current" ||
              expandedShifts.includes(shift.id)) && (
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-green-600">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(shift.total)}
                    </p>
                    <p className="text-gray-600 mt-2">
                      Ngày:{" "}
                      <span className="font-bold">
                        {selectedDate
                          ? format(selectedDate, "dd/MM/yyyy", { locale: vi })
                          : ""}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Thời gian:{" "}
                      <span className="font-bold">
                        {shift.startTime} - {shift.endTime}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Trạng thái:{" "}
                      <span
                        className={cn(
                          "font-bold",
                          shift.status === "current"
                            ? "text-green-600"
                            : shift.status === "ended"
                            ? "text-red-600"
                            : "text-yellow-600"
                        )}
                      >
                        {getStatusText(shift.status)}
                      </span>
                    </p>
                    {shift.status === "current" && (
                      <Dialog
                        open={isTransferDialogOpen}
                        onOpenChange={setIsTransferDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                            Chuyển tiền ca
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Chuyển tiền ca</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 space-y-4">
                            <p className="text-lg font-semibold">
                              Tổng tiền ca:{" "}
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(shift.total)}
                            </p>
                            <div className="space-y-2">
                              <Label htmlFor="currentStaff">
                                Nhân viên hiện tại
                              </Label>
                              <Input
                                id="currentStaff"
                                value={currentStaff}
                                onChange={(e) =>
                                  setCurrentStaff(e.target.value)
                                }
                                placeholder="Nhập tên nhân viên hiện tại"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="nextStaff">
                                Nhân viên ca tiếp theo
                              </Label>
                              <Input
                                id="nextStaff"
                                value={nextStaff}
                                onChange={(e) => setNextStaff(e.target.value)}
                                placeholder="Nhập tên nhân viên ca tiếp theo"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleTransferConfirm}>
                              Xác nhận chuyển tiền
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </main>
  );
}
