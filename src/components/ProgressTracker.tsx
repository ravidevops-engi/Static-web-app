import { CheckCircle, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProgressTrackerProps {
  totalQuestions: number;
  viewedCount: number;
  bookmarkedCount: number;
}

export function ProgressTracker({ totalQuestions, viewedCount, bookmarkedCount }: ProgressTrackerProps) {
  const viewedPercentage = Math.round((viewedCount / totalQuestions) * 100);
  const bookmarkedPercentage = Math.round((bookmarkedCount / totalQuestions) * 100);

  return (
    <Card className="mb-8 border-2 shadow-card">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{totalQuestions}</div>
            <div className="text-sm text-muted-foreground">Total Questions</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <div className="text-3xl font-bold text-accent">{viewedCount}</div>
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              Viewed ({viewedPercentage}%)
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${viewedPercentage}%` }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Bookmark className="h-5 w-5 text-secondary" />
              <div className="text-3xl font-bold text-secondary">{bookmarkedCount}</div>
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              Bookmarked ({bookmarkedPercentage}%)
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${bookmarkedPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
