import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-500 ">
      <ul className="flex items-center gap-3 text-white">
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng Ký</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
