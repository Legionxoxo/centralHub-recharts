import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT for menu */}
      <div className="w-[15%] md:w-[10%] lg:[17%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 mt-3"
        >
          <Image src="/logo.png" alt="logo" width={52} height={52} />
          <span className="hidden lg:block font-bold text-xl ">
            Central Sales
          </span>
        </Link>

        <Menu />
      </div>

      {/* Right for calendor*/}
      <div className="w-[85%] md:w-[90%] lg:w-[83%] xl:w-[86%] bg-[#F3F6FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
