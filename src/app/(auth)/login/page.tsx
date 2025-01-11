import LoginForm from "@/app/(auth)/login/LoginForm";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
      <LoginForm />
    </div>
  );
}
