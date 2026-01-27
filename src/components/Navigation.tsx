import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MusicPlayer } from "@/components/MusicPlayer";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconMail,
    IconBrandInstagram,
    IconWorld,
    IconMenu,
} from "@tabler/icons-react";
import { Menu } from "lucide-react";

export const Navigation = () => {
    const links = [
        {
            title: "Website",
            icon: <IconWorld className="w-5 h-5" />,
            href: "https://ckrdatacenter.vercel.app/",
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/rishirohankalapala/",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="w-5 h-5" />,
            href: "https://github.com/RishiRohanKalapala-cloud",
        },
        {
            title: "Twitter",
            icon: <IconBrandX className="w-5 h-5" />,
            href: "https://x.com/Aithrivestartup",
        },
        {
            title: "Instagram",
            icon: <IconBrandInstagram className="w-5 h-5" />,
            href: "https://www.instagram.com/rishi.rhn?igsh=Z3B1Z2FiaDk2am5n&utm_source=qr",
        },
        {
            title: "Email",
            icon: <IconMail className="w-5 h-5" />,
            href: "mailto:rishirohankalapala@gmail.com",
        },
    ];

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-4">

            {/* Last Updated Date - hidden on mobile */}
            <div className="hidden md:flex flex-col items-end">
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest leading-none mb-1">Last Updated</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">Jan 27, 2026</span>
            </div>

            {/* Time Capsule - hidden on mobile */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group min-w-[120px] justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {formatTime(time)} IST
            </button>

            <Sheet>
                <SheetTrigger asChild>
                    <button className="p-3 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-zinc-800 transition-colors shadow-2xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="8" x2="20" y2="8" />
                            <line x1="4" y1="16" x2="20" y2="16" />
                        </svg>
                    </button>
                </SheetTrigger>
                <SheetContent className="bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col gap-8 w-full max-w-sm sm:max-w-md">

                    {/* Social Links List */}
                    <div className="space-y-4 pt-8">
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">Connect</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {links.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-900/50 transition-colors group border border-transparent hover:border-zinc-800"
                                >
                                    <span className="text-zinc-400 group-hover:text-white transition-colors">{link.icon}</span>
                                    <span className="text-sm text-zinc-300 group-hover:text-white font-medium">{link.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Agency Button */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">Work</h3>
                        <a
                            href="https://www.redlix.co.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-4 py-3 rounded-2xl bg-zinc-900/50 border border-white/5 text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-red-500/20 transition-all duration-300 flex items-center justify-between group"
                        >
                            <span>The Agency</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                        </a>
                    </div>

                    {/* Music Player */}
                    <div className="mt-auto">
                        <MusicPlayer />
                    </div>

                </SheetContent>
            </Sheet>
        </div>
    );
};
