import React from "react";
import { links } from "../data";

export default function Navbar() {
  return (
    <nav className="bg-emerald-200">
      <div className="mx-auto max-w-7xl py-4 flex  flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          lanzy<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize  text-2xl tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
