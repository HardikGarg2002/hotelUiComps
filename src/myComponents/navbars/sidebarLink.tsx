"use client";
import React from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavItems {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode | any;
}
export const MySidebarLink = ({
  navItem,
  className,
  animate = true,
  open = true,
  ...props
}: {
  navItem: NavItems;
  className?: string;
  animate?: boolean;
  open?: boolean;
  props?: LinkProps;
}) => {
  const pathname = usePathname();
  let selected = false;
  if (navItem.href === pathname) {
    selected = true;
  }
  return (
    <Link
      href={navItem.href}
      className={cn(
        `flex items-center justify-start gap-2 group/sidebar py-2 ${
          selected
            ? "bg-neutral-500 dark:bg-neutral-800  dark:text-primary-400 "
            : "text-neutral-700 dark:text-neutral-200"
        } transition duration-150 rounded-md px-4`,
        className
      )}
      {...props}
    >
      {/* {GetIcon(navItem.icon)} */}
      <navItem.icon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {navItem.label}
      </motion.span>
    </Link>
  );
};
