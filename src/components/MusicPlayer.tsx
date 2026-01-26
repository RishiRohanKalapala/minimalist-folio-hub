
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, AudioWaveform, Disc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Song Details
    const songTitle = "Rajula Maha Rajula";
    const artistName = "Saicharan Bhaskaruni";
    const audioSrc = "/rajula-maha-rajula.mp3"; // User must add this file to public/

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(e => console.log("Playback failed:", e));
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsPlaying(!isPlaying);
    };

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const formatTime = (seconds: number) => {
        if (!seconds || isNaN(seconds)) return "00:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} `;
    };

    return (
        <>
            <audio ref={audioRef} src={audioSrc} preload="metadata" />

            <motion.div
                layout
                initial={false}
                animate={{
                    width: isExpanded ? 320 : 120,
                    height: isExpanded ? 180 : 48,
                    borderRadius: 32,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
                onClick={toggleExpand}
                className="bg-black border border-white/10 shadow-2xl relative overflow-hidden cursor-pointer group z-50 origin-top-right mx-auto max-w-[calc(100vw-2rem)]"
            >
                {/* Expanded View */}
                <AnimatePresence mode="wait">
                    {isExpanded ? (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="p-6 w-full h-full flex flex-col justify-between"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 blur-[50px] rounded-full pointer-events-none" />

                            <div className="flex gap-4 items-center relative z-10">
                                {/* Album Art */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 shadow-lg shadow-red-900/20 flex items-center justify-center">
                                    <Disc className="text-white/20 animate-spin-slow" size={24} />
                                </div>

                                {/* Song Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-medium text-lg leading-tight tracking-tight truncate">
                                        {songTitle}
                                    </h3>
                                    <p className="text-zinc-500 text-sm truncate">{artistName}</p>
                                </div>

                                {/* Visualizer */}
                                <div className="text-red-500">
                                    {isPlaying ? (
                                        <div className="flex gap-0.5 items-end h-4">
                                            <span className="w-1 bg-red-500 rounded-full animate-[music-bar_1s_ease-in-out_infinite] h-2"></span>
                                            <span className="w-1 bg-red-400 rounded-full animate-[music-bar_1.2s_ease-in-out_infinite] delay-75 h-4"></span>
                                            <span className="w-1 bg-red-500 rounded-full animate-[music-bar_0.8s_ease-in-out_infinite] delay-150 h-3"></span>
                                        </div>
                                    ) : (
                                        <AudioWaveform size={20} />
                                    )}
                                </div>
                            </div>

                            {/* Controls & Progress */}
                            <div className="space-y-3 relative z-10">
                                <div className="w-full bg-zinc-800/50 h-1 rounded-full overflow-hidden">
                                    <div
                                        className="bg-white h-full rounded-full"
                                        style={{ width: `${(currentTime / (duration || 1)) * 100}% ` }}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-zinc-600">{formatTime(currentTime)}</span>

                                    <div className="flex items-center gap-6">
                                        <SkipBack className="fill-zinc-400 text-zinc-400 w-5 h-5" />
                                        <button
                                            onClick={togglePlay}
                                            className="text-white hover:scale-110 transition-transform active:scale-95"
                                        >
                                            {isPlaying ? <Pause className="fill-white" size={24} /> : <Play className="fill-white" size={24} />}
                                        </button>
                                        <SkipForward className="fill-zinc-400 text-zinc-400 w-5 h-5" />
                                    </div>

                                    <span className="text-[10px] font-mono text-zinc-600">{formatTime(duration)}</span>
                                </div>
                            </div>

                        </motion.div>
                    ) : (
                        /* Collapsed View (Pill) */
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full h-full flex items-center justify-between px-4"
                        >
                            <div className="flex items-center gap-3">
                                {/* Mini Album Art */}
                                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                                    {isPlaying && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-white leading-none">Music</span>
                                    {isPlaying && <span className="text-[8px] text-red-500 font-mono leading-none mt-0.5">Playing</span>}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex gap-0.5 items-end h-3">
                                    {isPlaying ? (
                                        <>
                                            <span className="w-0.5 bg-red-500 rounded-full animate-[music-bar_0.5s_ease-in-out_infinite] h-2"></span>
                                            <span className="w-0.5 bg-red-500 rounded-full animate-[music-bar_0.7s_ease-in-out_infinite] delay-100 h-3"></span>
                                            <span className="w-0.5 bg-red-500 rounded-full animate-[music-bar_0.6s_ease-in-out_infinite] delay-200 h-1.5"></span>
                                        </>
                                    ) : (
                                        <span className="w-0.5 bg-zinc-600 rounded-full h-1"></span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

