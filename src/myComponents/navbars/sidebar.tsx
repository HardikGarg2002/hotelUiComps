"use client";
import React from "react";
import { Sidebar, SidebarBody } from "../../components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Logo1 } from "../logo/logo1";
import { getNavItems } from "@/lib/nav";
import { MySidebarLink } from "./sidebarLink";

export default function MySidebar() {
  const navItems = getNavItems();
  return (
    <Sidebar animate={false}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Logo1 />
          <div className="mt-8 flex flex-col gap-2">
            {navItems.map((navItem, idx) => (
              <MySidebarLink key={idx} navItem={navItem} />
            ))}
          </div>
        </div>
        <div>
          {/* <SidebarLink
            navItem={{
              label: "Hardik Garg",
              href: "#",
              icon: (
                <Image
                  src="https://assets.aceternity.com/manu.png"
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          /> */}
          Profile section
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((_, i) => (
            <div
              key={"first" + i}
              className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((_, i) => (
            <div
              key={"second" + i}
              className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
