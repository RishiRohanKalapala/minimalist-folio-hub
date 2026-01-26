import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
  IconBrandInstagram,
  IconWorld,
} from "@tabler/icons-react";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Website",
      icon: (
        <IconWorld className="h-full w-full text-text-secondary hover:text-text-primary transition-smooth" />
      ),
      href: "https://ckrdatacenter.vercel.app/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-text-secondary hover:text-text-primary transition-smooth" />
      ),
      href: "https://www.linkedin.com/in/rishirohankalapala/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-text-secondary hover:text-text-primary transition-smooth" />
      ),
      href: "https://github.com/RishiRohanKalapala-cloud",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-text-secondary hover:text-text-primary transition-smooth" />
      ),
      href: "https://x.com/Aithrivestartup",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-text-secondary hover:text-text-primary transition-smooth" />
      ),
      href: "https://www.instagram.com/rishi.rhn?igsh=Z3B1Z2FiaDk2am5n&utm_source=qr",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-text-secondary hover:text-text-primary transition-smooth" />
      ),
      href: "mailto:rishirohankalapala@gmail.com",
    },
  ];

  return (
    <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex flex-col items-end gap-3">
      <FloatingDock items={links} />

      <a
        href="https://www.redlix.co.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/80 hover:border-red-500/20 transition-all duration-300 shadow-2xl flex items-center gap-2 group"
      >
        <span>The Agency</span>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
      </a>

      <div className="pt-2">
        <MusicPlayer />
      </div>
    </div>
  );
}
