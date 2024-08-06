import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { GetIcon } from "@/common/icon";

interface NavItems {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode | any;
}

export const Sidebar = ({
  children,
  animate = true,
}: {
  children: React.ReactNode;
  animate?: boolean;
}) => {
  return (
    <div className="flex">
      <DesktopSidebar animate={animate}>{children}</DesktopSidebar>
      <MobileSidebar>{children}</MobileSidebar>
    </div>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  animate = true,
  ...props
}: React.ComponentProps<typeof motion.div> & { animate?: any | boolean }) => {
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
        className
      )}
      animate={{
        width: animate ? "300px" : "300px",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
      )}
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
              className
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            >
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({
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
  return (
    <Link
      href={navItem.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2",
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
