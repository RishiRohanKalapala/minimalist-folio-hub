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
import leetcodeLogo from "@/assets/leetcode-logo.png";

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
      title: "LeetCode",
      icon: (
        <img src={leetcodeLogo} alt="LeetCode" className="h-full w-full object-contain filter brightness-75 hover:brightness-100 transition-all" />
      ),
      href: "https://leetcode.com/u/22r01a7335/",
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
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
