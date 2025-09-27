import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar?: string;
}

interface LeetCodeStatsProps {
  username: string;
}

export const LeetCodeStats = ({ username }: LeetCodeStatsProps) => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using a public LeetCode API
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const data = await response.json();
        
        // Map the response to our expected format
        setStats({
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0,
        });
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError('Failed to load LeetCode stats');
        
        // Fallback with sample data for demonstration
        setStats({
          totalSolved: 150,
          totalQuestions: 3000,
          easySolved: 80,
          mediumSolved: 55,
          hardSolved: 15,
          acceptanceRate: 78.5,
          ranking: 245000,
          contributionPoints: 120,
          reputation: 150,
        });
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchLeetCodeStats();
    }
  }, [username]);

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div>
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-3 w-16 mt-1" />
            </div>
            <Skeleton className="h-3 w-16" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-text-primary">LeetCode</h3>
              <p className="text-xs text-text-secondary">Connection Error</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-secondary text-xs">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-text-primary">LeetCode</h3>
            <p className="text-xs text-text-secondary">@{username}</p>
          </div>
          <a 
            href={`https://leetcode.com/u/${username}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            View Profile
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-text-primary">{stats?.totalSolved}</div>
            <div className="text-xs text-text-secondary">Solved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">{stats?.acceptanceRate.toFixed(0)}%</div>
            <div className="text-xs text-text-secondary">Acceptance</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">{stats?.ranking ? `#${Math.floor(stats.ranking / 1000)}k` : 'N/A'}</div>
            <div className="text-xs text-text-secondary">Ranking</div>
          </div>
        </div>
        
        <div className="flex justify-between text-xs">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Easy: {stats?.easySolved}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            Medium: {stats?.mediumSolved}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            Hard: {stats?.hardSolved}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};