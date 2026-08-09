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

type AppState = {
  user: MockUser | null;
  isAuthenticated: boolean;
  submittedDays: number[];
  streak: number;
  xp: number;
  totalDays: number;
};

type AppContextType = AppState & {
  login: (email: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
  submitDay: (day: number) => void;
  resetProgress: () => void;
  isHydrated: boolean;
};

const INITIAL_MOCK_STATE: AppState = {
  user: { name: "Alex", email: "alex@example.com" },
  isAuthenticated: true,
  submittedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  streak: 11,
  xp: 14000,
  totalDays: 60,
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
        parsed.user = { name: "Alex", email: "alex@example.com" };
        setState(parsed);
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
      return {
        ...prev,
        submittedDays: [...prev.submittedDays, day],
        streak: prev.streak + 1,
        xp: prev.xp + 500,
      };
    });
  };

  const login = (email: string) => {
    void email;
    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      user: { name: "Alex", email: "alex@example.com" }
    }));
  };

  const signup = (name: string, email: string) => {
    void name;
    void email;
    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      user: { name: "Alex", email: "alex@example.com" }
    }));
  };

  const logout = () => {
    setState(prev => ({
      ...prev,
      isAuthenticated: false,
      user: { name: "Alex", email: "alex@example.com" }
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

  return (
    <AppContext.Provider value={{ ...state, user: state.user || { name: "Alex", email: "alex@example.com" }, login, signup, logout, submitDay, resetProgress, isHydrated }}>
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
