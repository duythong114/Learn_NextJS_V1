import RegisterForm from "@/app/(auth)/register/RegisterForm";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-xl font-semibold text-center">Đăng ký</h1>
      <RegisterForm />
    </div>
  );
}
