"use client";

import { useState, useEffect } from "react";

export default function TopBar() {
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setClock(`${hh}:${mm}`);
    };
    tick();
    const interval = setInterval(tick, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 flex h-[34px] items-center justify-between px-4 text-[12.5px] text-dim bg-[#0a0d12]/55 backdrop-blur-[6px] border-b border-border-subtle">
      <div className="flex items-center gap-4">
        <span>arthur@dev-portfolio</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-text-main font-semibold tracking-[0.3px]">{clock}</span>
      </div>
    </div>
  );
}
