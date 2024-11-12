"use client";
import TopBar from "@/components/layout/top-bar";
import { Button } from "@/components/ui/button";
import { Pen, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StaffPage() {
  const router = useRouter();

  const [staffs, setStaffs] = useState([
    { id: 1, name: "Nguyễn Văn A", username: "nvA", password: "123456" },
    { id: 2, name: "Nguyễn Văn B", username: "nvB", password: "123456" },
  ]);

  const handleDelete = (id: number) => {
    setStaffs(staffs.filter((staff) => staff.id !== id));
  };

  const handleModify = (
    id: number,
    newName: string,
    newUsername: string,
    newPassword: string
  ) => {
    setStaffs(
      staffs.map((staff) =>
        staff.id === id
          ? {
              ...staff,
              name: newName,
              username: newUsername,
              password: newPassword,
            }
          : staff
      )
    );
  };

  return (
    <main className="container p-4">
      <TopBar />
      <section className="mt-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Danh sách nhân viên</h2>
        <div className="flex items-center gap-4 justify-between">
          <Button
            variant="outline"
            onClick={() => router.push("/staff/create")}
          >
            Thêm nhân viên
          </Button>
        </div>
        {/* Staff list */}

        <div className="flex flex-col gap-4">
          {/* Staff item */}
          {staffs.map((staff) => (
            <div
              key={staff.id}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <span className="font-bold">{staff.name}</span>
              </div>
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Pen className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Sửa thông tin nhân viên</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center gap-4 justify-between">
                        <Label htmlFor="name" className="text-left w-24">
                          Tên
                        </Label>
                        <Input id="name" defaultValue={staff.name} />
                      </div>
                      <div className="flex items-center gap-4">
                        <Label htmlFor="username" className="text-left w-24">
                          Tài khoản
                        </Label>
                        <Input
                          id="username"
                          defaultValue={staff.username}
                          className="col-span-2"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <Label htmlFor="password" className="text-left w-24">
                          Mật khẩu
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          defaultValue={staff.password}
                        />
                      </div>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button>Lưu thay đổi</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Xác nhận thay đổi</AlertDialogTitle>
                          <AlertDialogDescription>
                            Bạn có chắc chắn muốn lưu những thay đổi này?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Hủy</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() =>
                              handleModify(
                                staff.id,
                                (
                                  document.getElementById(
                                    "name"
                                  ) as HTMLInputElement
                                ).value,
                                (
                                  document.getElementById(
                                    "username"
                                  ) as HTMLInputElement
                                ).value,
                                (
                                  document.getElementById(
                                    "password"
                                  ) as HTMLInputElement
                                ).value
                              )
                            }
                          >
                            Xác nhận
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Xác nhận xóa nhân viên
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-left">
                        Bạn có chắc chắn muốn xóa nhân viên{" "}
                        <p className="font-bold">{staff.name}</p>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="w-full">
                        Hủy
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(staff.id)}
                        className="w-full bg-red-400 hover:bg-red-500"
                      >
                        Xóa
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
