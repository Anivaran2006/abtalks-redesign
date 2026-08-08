"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type SubmissionData = {
  githubUrl: string;
  commitUrl: string;
  linkedinUrl: string;
};

export type MockUser = {
  name: string;
  email: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "mentor";
  content: string;
  timestamp: number;
};

export type NotificationType = "streak" | "xp" | "welcome" | "info";

export type NotificationMessage = {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: number;
};

type AppState = {
  user: MockUser | null;
  isAuthenticated: boolean;
  submittedDays: number[];
  streak: number;
  xp: number;
  totalDays: number;
  chatHistory: ChatMessage[];
  notifications: NotificationMessage[];
};

type AppContextType = AppState & {
  login: (email: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
  submitDay: (day: number) => void;
  resetProgress: () => void;
  updateUser: (name: string, email: string) => void;
  addChatMessage: (role: "user" | "mentor", content: string) => void;
  isHydrated: boolean;
};

const INITIAL_MOCK_STATE: AppState = {
  user: { name: "Alex", email: "alex@example.com" },
  isAuthenticated: true,
  submittedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  streak: 11,
  xp: 14000,
  totalDays: 60,
  chatHistory: [
    {
      id: "1",
      role: "mentor",
      content: "Hello! I'm your AI mentor. Ask me anything about your 60-day coding challenge, algorithms, or web development.",
      timestamp: Date.now() - 100000,
    }
  ],
  notifications: [
    {
      id: "welcome-1",
      title: "Welcome to AbTalks",
      message: "You have successfully joined the 60-day challenge. Your journey starts now!",
      type: "welcome",
      timestamp: Date.now() - 86400000 * 11, // 11 days ago
    }
  ]
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [state, setState] = useState<AppState>(INITIAL_MOCK_STATE);

  useEffect(() => {
    const saved = localStorage.getItem("abtalks_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setState((prev) => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to parse local storage state", e);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("abtalks_state", JSON.stringify(state));
    }
  }, [state, isHydrated]);

  const submitDay = (day: number) => {
    setState((prev) => {
      if (prev.submittedDays.includes(day)) return prev;
      
      const newStreak = prev.streak + 1;
      const newXp = prev.xp + 500;
      const newNotifications = [...prev.notifications];
      
      // XP Notification
      newNotifications.unshift({
        id: `xp-${day}-${Date.now()}`,
        title: "Level Up!",
        message: `You earned 500 XP and climbed the leaderboard for completing Day ${day}.`,
        type: "xp",
        timestamp: Date.now(),
      });

      // Streak Milestone Notification
      if (newStreak % 5 === 0 || newStreak === 7 || newStreak === 12) {
        newNotifications.unshift({
          id: `streak-${newStreak}-${Date.now()}`,
          title: "Streak Milestone",
          message: `You hit a ${newStreak}-day streak! Keep the momentum going.`,
          type: "streak",
          timestamp: Date.now(),
        });
      }

      return {
        ...prev,
        submittedDays: [...prev.submittedDays, day],
        streak: newStreak,
        xp: newXp,
        notifications: newNotifications,
      };
    });
  };

  const login = (email: string) => {
    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      user: { name: email.split("@")[0], email }
    }));
  };

  const signup = (name: string, email: string) => {
    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      user: { name, email }
    }));
  };

  const logout = () => {
    setState(prev => ({
      ...prev,
      isAuthenticated: false,
      user: null
    }));
  };

  const resetProgress = () => {
    setState(prev => ({
      ...prev,
      submittedDays: [],
      streak: 0,
      xp: 0,
    }));
  };

  const updateUser = (name: string, email: string) => {
    setState(prev => ({
      ...prev,
      user: prev.user ? { ...prev.user, name, email } : { name, email }
    }));
  };

  const addChatMessage = (role: "user" | "mentor", content: string) => {
    setState(prev => ({
      ...prev,
      chatHistory: [
        ...prev.chatHistory,
        {
          id: Math.random().toString(36).substring(7),
          role,
          content,
          timestamp: Date.now(),
        }
      ]
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, login, signup, logout, submitDay, resetProgress, updateUser, addChatMessage, isHydrated }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
