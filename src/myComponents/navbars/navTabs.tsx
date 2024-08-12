import Tab from "./navTab";

export default function NavTabs({
  tabs,
  defaultTab,
}: {
  tabs: string[];
  defaultTab: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 rounded-md bg-violet-950 p-2">
      {tabs.map((tab) => (
        <Tab text={tab} key={tab} defaultTab={defaultTab} />
      ))}
    </div>
  );
}
