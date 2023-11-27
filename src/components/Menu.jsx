"use client";
import React, { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/" },
  { id: 3, title: "Opening hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const MenuComp = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <Menu
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                      {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
                    <Link
            href={user ? "/orders" : "login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <ShoppingCartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuComp;
