import { cn } from "@/lib/utils";
import Tab from "./navTab";

export default function NavTabs({
  tabs,
  defaultTab,
  className,
}: {
  tabs: string[];
  defaultTab: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-evenly gap-1 rounded-md bg-violet-950 p-2 ",
        className
      )}
    >
      {tabs.map((tab) => (
        <Tab text={tab} key={tab} defaultTab={defaultTab} />
      ))}
    </div>
  );
}
