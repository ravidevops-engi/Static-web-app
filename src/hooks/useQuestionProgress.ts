import { useState, useEffect } from "react";

interface ProgressData {
  viewed: Set<string>;
  bookmarked: Set<string>;
}

export function useQuestionProgress(topicKey: string) {
  const [viewedQuestions, setViewedQuestions] = useState<Set<string>>(new Set());
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<string>>(new Set());

  // Load from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem(`progress-${topicKey}`);
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setViewedQuestions(new Set(parsed.viewed || []));
        setBookmarkedQuestions(new Set(parsed.bookmarked || []));
      } catch (e) {
        console.error("Failed to parse progress data", e);
      }
    }
  }, [topicKey]);

  // Save to localStorage whenever state changes
  useEffect(() => {
    const data = {
      viewed: Array.from(viewedQuestions),
      bookmarked: Array.from(bookmarkedQuestions),
    };
    localStorage.setItem(`progress-${topicKey}`, JSON.stringify(data));
  }, [viewedQuestions, bookmarkedQuestions, topicKey]);

  const markAsViewed = (questionId: string) => {
    setViewedQuestions(prev => new Set([...prev, questionId]));
  };

  const toggleBookmark = (questionId: string) => {
    setBookmarkedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const isViewed = (questionId: string) => viewedQuestions.has(questionId);
  const isBookmarked = (questionId: string) => bookmarkedQuestions.has(questionId);

  return {
    viewedCount: viewedQuestions.size,
    bookmarkedCount: bookmarkedQuestions.size,
    markAsViewed,
    toggleBookmark,
    isViewed,
    isBookmarked,
  };
}
