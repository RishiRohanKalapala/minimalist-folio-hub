import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, Calendar, Trophy, Target } from 'lucide-react';

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
      <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-200/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">LC</span>
            </div>
            <Skeleton className="h-6 w-32" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
          <Skeleton className="h-8 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-200/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-text-primary">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">LC</span>
            </div>
            LeetCode Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-secondary text-sm">{error}</p>
        </CardContent>
      </Card>
    );
  }

  const completionRate = stats ? Math.round((stats.totalSolved / stats.totalQuestions) * 100) : 0;

  return (
    <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-200/20 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-text-primary">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">LC</span>
          </div>
          LeetCode Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Target className="w-4 h-4 text-orange-500" />
              <span className="text-2xl font-bold text-text-primary">{stats?.totalSolved}</span>
            </div>
            <p className="text-xs text-text-secondary">Problems Solved</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-2xl font-bold text-text-primary">{stats?.acceptanceRate.toFixed(1)}%</span>
            </div>
            <p className="text-xs text-text-secondary">Acceptance Rate</p>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Easy</span>
            <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
              {stats?.easySolved}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Medium</span>
            <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20">
              {stats?.mediumSolved}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Hard</span>
            <Badge variant="secondary" className="bg-red-500/10 text-red-600 hover:bg-red-500/20">
              {stats?.hardSolved}
            </Badge>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs text-text-secondary mb-1">
            <span>Progress</span>
            <span>{completionRate}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(completionRate, 100)}%` }}
            />
          </div>
        </div>

        {/* Additional Stats */}
        {stats?.ranking && stats.ranking > 0 && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-text-secondary">Ranking</span>
            </div>
            <span className="text-text-primary font-medium">#{stats.ranking.toLocaleString()}</span>
          </div>
        )}

        <a 
          href={`https://leetcode.com/u/${username}/`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-orange-600 hover:text-orange-700 transition-colors"
        >
          View Profile →
        </a>
      </CardContent>
    </Card>
  );
};