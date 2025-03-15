"use client";

import { Ai, Coder } from "@/assets";
import { baseConfig } from "@/constant/base-config";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { TypeAnimation } from "react-type-animation";
import IndexContainer from "./index-container";
import Links from "./links";

function Designer() {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-neutral-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-neutral-400/90">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-neutral-700 bg-zinc-50 dark:border-neutral-400" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-neutral-700 bg-zinc-50 dark:border-neutral-400" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-neutral-700 bg-zinc-50 dark:border-neutral-400" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-neutral-700 bg-zinc-50 dark:border-neutral-400" />
      </span>
      喜欢Node.js、React、TypeScript
    </span>
  );
}

function OCD() {
  return (
    <IndexContainer className="group inline-flex items-center">
      <Coder className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-90 " />
      <span>全不栈选手</span>
    </IndexContainer>
  );
}

function Founder() {
  return (
    <IndexContainer className="group inline-flex items-center">
      <Ai className="mr-1 inline-flex group-hover:animate-bounce" />
      <span>AI CV工程师</span>
    </IndexContainer>
  );
}

export function Headline() {
  return (
    <div className="">
      <motion.h1
        className="xs:text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl lg:text-5xl "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <IndexContainer>你好，我是</IndexContainer>
        <IndexContainer className="text-8xl">
          {baseConfig.authors}
        </IndexContainer>
        <IndexContainer>
          <TypeAnimation
            sequence={[
              500,
              "一名前端开发工程师 。",
              1000,
              "A Web <Developer /> .",
              1000,
            ]}
            speed={10}
            repeat={Infinity}
          />
        </IndexContainer>
        <Designer />
        <span className="block h-4" />
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-2 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>{baseConfig.description}</Balancer>
        <Balancer>{baseConfig.apologize}</Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6 flex-wrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <Links />
      </motion.div>
    </div>
  );
}
