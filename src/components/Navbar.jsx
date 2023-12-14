import Link from "next/link";
import React from "react";
import { Phone, ShoppingCart } from "lucide-react";
import MenuComp from "./Menu";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 p-4 flex items-center justify-center border-b-2  uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Grubz</Link>
      </div>

      <div className="md:hidden">
        <MenuComp />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {!user ? <Link href="/">Login</Link> : <Link href="/">Orders</Link>}
        <Link href="/cart">
          <ShoppingCart color="gray" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
