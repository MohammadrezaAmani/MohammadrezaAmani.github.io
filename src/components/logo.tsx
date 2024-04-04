import React from "react";
import { commonArgs } from "@/configs/types";
function logo({ lang, theme }: commonArgs) {
  return (
    <a href="/" className="font-sacramento text-slate-600 text-xl">
      Mohammadreza Amani
    </a>
  );
}

export default logo;
