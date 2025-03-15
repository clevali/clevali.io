"use client";
import { baseConfig } from "@/constant/base-config";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { reverseRenderMontion } from "@/constant/common";

const navigationItems = baseConfig.navigationItems;
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-black dark:hover:text-white secText"
    >
      {children}
    </Link>
  );
}

function Links() {
  return (
    <nav className="flex gap-6 text-sm font-medium text-global">
      {navigationItems.map(({ href, title }) => (
        <NavLink key={href} href={href}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}

export function Footer() {
  return (
    <motion.footer className="px-10" {...reverseRenderMontion}>
      <div>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <div>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
                &copy; {new Date().getFullYear()} {baseConfig.title}
                &nbsp;
              </p>
              <Links />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-col items-center justify-start gap-2 sm:flex-row">
              欢迎 👏🏻 你的访问
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
