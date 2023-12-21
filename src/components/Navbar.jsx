"use client"

import Link from "next/link";
import React from "react";
import { LogOut, Phone, ShoppingCart } from "lucide-react";
import MenuComp from "./Menu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = localStorage.getItem('token') || null;
  const restaurantCode = localStorage.getItem('restaurantCode')
  const router = useRouter()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    router.push("/login")
  }

  return (
    <div className="h-12 p-4 flex items-center justify-center border-b-2  uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={`/restaurants/${restaurantCode}/admin`}>Admin</Link>
        <Link href="/menu">Orders</Link>
      </div>

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Grubz</Link>
      </div>

      <div className="md:hidden">
        <MenuComp />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {!user ? <Link href="/login">Login</Link> : <LogOut onClick={handleLogOut} className="cursor-pointer"/>}
      </div>
    </div>
  );
};

export default Navbar;
