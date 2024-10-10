const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/Manager.png",
        label: "Manager",
        href: "/list/manager",
        visible: ["admin", "manager"],
      },
      {
        icon: "/salesman.png",
        label: "Salesman",
        href: "/list/salesman",
        visible: ["admin", "manager"],
      },

      {
        icon: "/session.png",
        label: "Session",
        href: "/list/session",
        visible: ["admin", "manager"],
      },

      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/announcement.jpeg",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "manager", "salesman"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "manager", "salesman"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "manager", "salesman"],
      },
    ],
  },
];

import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 ml-2" key={i.title}>
          <span className="hidden lg:block text-zinc-900 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-zinc-900 py-2 md:px-2 rounded-md hover:bg-light"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
