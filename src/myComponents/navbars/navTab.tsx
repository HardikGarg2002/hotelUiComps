"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

interface TabProps {
  text: string;
  defaultTab: string;
}
const Tab = ({ text, defaultTab }: TabProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selected =
    searchParams.get("status") === (text === defaultTab ? null : text);

  function setSelected(value: string) {
    if (value === defaultTab) {
      router.push(`${pathname}`);
    } else {
      router.push(`${pathname}/?status=${value}`);
    }
  }

  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-md p-2 text-sm transition-all",
        selected ? "text-white" : "text-slate-300 hover:font-black"
      )}
    >
      <p className="relative z-50 min-w-20">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-600 to-pink-600"
        />
      )}
    </button>
  );
};

export default Tab;
