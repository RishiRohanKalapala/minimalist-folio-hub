import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

interface LeetCodeStatsProps {
  username: string;
}

export const LeetCodeStats = ({ username }: LeetCodeStatsProps) => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await response.json();

        setStats({
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0,
        });
      } catch (err) {
        // Fallback fallback sample data
        setStats({
          totalSolved: 150, totalQuestions: 3000, easySolved: 80,
          mediumSolved: 55, hardSolved: 15, acceptanceRate: 78.5, ranking: 245000,
        });
      } finally {
        setLoading(false);
      }
    };
    if (username) fetchLeetCodeStats();
  }, [username]);

  if (loading) {
    return (
      <div className="py-8 border-t border-zinc-900 animate-pulse">
        <div className="h-4 w-32 bg-zinc-900 rounded mb-6" />
        <div className="grid grid-cols-3 gap-8">
          <div className="h-12 bg-zinc-900 rounded" />
          <div className="h-12 bg-zinc-900 rounded" />
          <div className="h-12 bg-zinc-900 rounded" />
        </div>
      </div>
    );
  }

  return (
    <section className="mb-20 pt-8 border-t border-zinc-900 bg-gradient-to-br from-[#ff0000]/10 via-transparent to-transparent rounded-3xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

        {/* Label Column */}
        <div className="md:col-span-3 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
            Algorithms
          </div>
          <a
            href={`https://leetcode.com/u/${username}/`}
            target="_blank"
            className="group flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-red-500 transition-colors"
          >
            Profile <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats Column */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-12">

            {/* Hero Stat */}
            <div className="space-y-1">
              <div className="text-5xl font-serif text-white tracking-tighter">
                {stats?.totalSolved}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                Problems <span className="text-red-500">Solved</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-5xl font-serif text-white tracking-tighter">
                {stats?.acceptanceRate.toFixed(1)}%
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                Acceptance <span className="text-red-500">Rate</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-5xl font-serif text-white tracking-tighter">
                {stats?.ranking ? `${Math.floor(stats.ranking / 1000)}k` : 'N/A'}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                Global <span className="text-red-500">Ranking</span>
              </div>
            </div>

          </div>

          {/* Difficulty Breakdown - Minimal Line Labels */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-8 border-t border-zinc-900/50">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Easy</span>
              <span className="text-sm font-light text-zinc-300">{stats?.easySolved}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Medium</span>
              <span className="text-sm font-light text-zinc-300">{stats?.mediumSolved}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Hard</span>
              <span className="text-sm font-light text-zinc-300">{stats?.hardSolved}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};