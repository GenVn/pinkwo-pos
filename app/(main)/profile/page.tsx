"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserRound, Mail, User } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const user = useUserStore((state) => state.users);
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    const token = localStorage.getItem("auth-storage");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {user?.avatar ? (
              <Image
                src={user.avatar}
                alt="User Avatar"
                width={120}
                height={120}
                className="rounded-full border-4 border-pink-500"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
                <UserRound className="w-20 h-20 text-pink-500" />
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {user?.name || "User"}
          </h1>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <User className="w-6 h-6 text-pink-500" />
            <div>
              <h2 className="text-sm font-medium text-gray-500">
                Tên đăng nhập
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                {user?.username || "N/A"}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <Mail className="w-6 h-6 text-pink-500" />
            <div>
              <h2 className="text-sm font-medium text-gray-500">Email</h2>
              <p className="text-lg font-semibold text-gray-800">
                {user?.email || "N/A"}
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="destructive"
          className="w-full mt-8 py-6 text-lg font-semibold"
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );
}
