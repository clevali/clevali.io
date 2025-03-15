"use client";
import { commonRenderMontion } from "@/constant/common";
import { motion } from "framer-motion";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <motion.div {...commonRenderMontion}>{children}</motion.div>;
}
