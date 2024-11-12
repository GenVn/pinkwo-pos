"use client";

import { useRef, useEffect } from "react";

export default function TabsBar({
  Tabs,
  activeTab,
  setActiveTab,
}: {
  Tabs: string[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current && containerRef.current) {
      const activeButton = tabsRef.current.children[
        activeTab
      ] as HTMLButtonElement;
      if (activeButton) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = activeButton.offsetWidth;
        const scrollLeft =
          activeButton.offsetLeft - containerWidth / 2 + buttonWidth / 2;
        containerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeTab]);

  return (
    <div ref={containerRef} className="overflow-x-auto hide-scrollbar">
      <div
        ref={tabsRef}
        className="inline-flex h-9 items-center justify-start rounded-lg bg-muted p-1 text-muted-foreground mt-4 whitespace-nowrap"
      >
        {Tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              activeTab === index ? "bg-background text-foreground shadow" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
