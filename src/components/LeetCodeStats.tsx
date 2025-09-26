import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, Calendar, Trophy, Target, ExternalLink } from 'lucide-react';

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
      <Card className="bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-orange-600/10 border border-orange-200/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Skeleton className="w-6 h-6" />
            </div>
            <Skeleton className="h-7 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
          <Skeleton className="h-12 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-orange-600/10 border border-orange-200/20 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl text-text-primary">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 6.406 6.406 0 0 0 .349 1.017 4.473 4.473 0 0 0 .237.383c.044.06.123.174.294.397l.045.067c.042.06.146.25.188.296l.348.474.409.552c.137.187.181.249.244.334l.027.037c.025.034.099.126.225.298l.117.158c.026.036.058.078.079.107l.24.334c.449.623.648.914.815 1.134l.02.027c.08.109.139.199.172.286.021.055.031.111.031.169 0 .13-.061.24-.184.318a.180.180 0 0 1-.144.049c-.041 0-.08-.016-.113-.049a.16.16 0 0 1-.049-.112c0-.05.024-.112.073-.187.024-.037.062-.085.100-.138l.013-.019.832-1.134c.171-.26.818-1.134 1.134-1.574a1.262 1.262 0 0 0 .1-.14c.067-.091.284-.415.284-.415l.013-.019c.025-.034.099-.126.225-.298l.117-.158c.026-.036.058-.078.079-.107l.24-.334c.449-.623.648-.914.815-1.134l.02-.027c.08-.109.139-.199.172-.286.021-.055.031-.111.031-.169 0-.13-.061-.24-.184-.318a.180.180 0 0 1-.144-.049c-.041 0-.08-.016-.113-.049a.16.16 0 0 1-.049-.112c0-.05.024-.112.073-.187.024-.037.062-.085.100-.138l.013-.019.832-1.134c.171-.26.818-1.134 1.134-1.574a1.262 1.262 0 0 0 .1-.14c.067-.091.284-.415.284-.415l.013-.019z"/>
              </svg>
            </div>
            LeetCode Profile
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
    <Card className="bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-orange-600/10 border border-orange-200/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              {/* Official LeetCode Logo */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 6.406 6.406 0 0 0 .349 1.017 4.473 4.473 0 0 0 .237.383c.044.06.123.174.294.397l.045.067c.042.06.146.25.188.296l.348.474.409.552c.137.187.181.249.244.334l.027.037c.025.034.099.126.225.298l.117.158c.026.036.058.078.079.107l.24.334c.449.623.648.914.815 1.134l.02.027c.08.109.139.199.172.286.021.055.031.111.031.169 0 .13-.061.24-.184.318a.180.180 0 0 1-.144.049c-.041 0-.08-.016-.113-.049a.16.16 0 0 1-.049-.112c0-.05.024-.112.073-.187.024-.037.062-.085.100-.138l.013-.019.832-1.134c.171-.26.818-1.134 1.134-1.574a1.262 1.262 0 0 0 .1-.14c.067-.091.284-.415.284-.415l.013-.019c.025-.034.099-.126.225-.298l.117-.158c.026-.036.058-.078.079-.107l.24-.334c.449-.623.648-.914.815-1.134l.02-.027c.08-.109.139-.199.172-.286.021-.055.031-.111.031-.169 0-.13-.061-.24-.184-.318a.180.180 0 0 1-.144-.049c-.041 0-.08-.016-.113-.049a.16.16 0 0 1-.049-.112c0-.05.024-.112.073-.187.024-.037.062-.085.100-.138l.013-.019.832-1.134c.171-.26.818-1.134 1.134-1.574a1.262 1.262 0 0 0 .1-.14c.067-.091.284-.415.284-.415l.013-.019z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">LeetCode Profile</h3>
              <p className="text-sm text-text-secondary">Coding Progress & Statistics</p>
            </div>
          </div>
          <a 
            href={`https://leetcode.com/u/${username}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:text-orange-700 transition-colors group-hover:scale-110 duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 border border-blue-200/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-3xl font-bold text-text-primary">{stats?.totalSolved}</span>
            </div>
            <p className="text-sm text-text-secondary font-medium">Problems Solved</p>
            <p className="text-xs text-text-muted">out of {stats?.totalQuestions}</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-200/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-3xl font-bold text-text-primary">{stats?.acceptanceRate.toFixed(1)}%</span>
            </div>
            <p className="text-sm text-text-secondary font-medium">Acceptance Rate</p>
            <p className="text-xs text-text-muted">submission success</p>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-text-primary mb-3">Problem Difficulty Distribution</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-green-500/5 border border-green-200/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-text-secondary">Easy</span>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-700 hover:bg-green-500/20 font-semibold">
                {stats?.easySolved}
              </Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/5 border border-yellow-200/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm font-medium text-text-secondary">Medium</span>
              </div>
              <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20 font-semibold">
                {stats?.mediumSolved}
              </Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-red-500/5 border border-red-200/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm font-medium text-text-secondary">Hard</span>
              </div>
              <Badge variant="secondary" className="bg-red-500/10 text-red-700 hover:bg-red-500/20 font-semibold">
                {stats?.hardSolved}
              </Badge>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary font-medium">Overall Progress</span>
            <span className="text-text-primary font-bold">{completionRate}%</span>
          </div>
          <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
              style={{ width: `${Math.min(completionRate, 100)}%` }}
            />
          </div>
        </div>

        {/* Additional Stats */}
        {stats?.ranking && stats.ranking > 0 && (
          <div className="flex items-center justify-between p-3 rounded-lg bg-purple-500/5 border border-purple-200/20">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-text-secondary">Global Ranking</span>
            </div>
            <span className="text-sm font-bold text-text-primary">#{stats.ranking.toLocaleString()}</span>
          </div>
        )}

        {stats?.contributionPoints && stats.contributionPoints > 0 && (
          <div className="flex items-center justify-between p-3 rounded-lg bg-indigo-500/5 border border-indigo-200/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-text-secondary">Contribution Points</span>
            </div>
            <span className="text-sm font-bold text-text-primary">{stats.contributionPoints}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};