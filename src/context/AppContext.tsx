"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type SubmissionData = {
  githubUrl: string;
  commitUrl: string;
  linkedinUrl: string;
};

type AppState = {
  submittedDays: number[];
  streak: number;
  xp: number;
  totalDays: number;
};

type AppContextType = AppState & {
  submitDay: (day: number) => void;
  resetProgress: () => void;
  isHydrated: boolean;
};

const INITIAL_MOCK_STATE: AppState = {
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
        setState(JSON.parse(saved));
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

  const resetProgress = () => {
    setState({
      submittedDays: [],
      streak: 0,
      xp: 0,
      totalDays: 60,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, submitDay, resetProgress, isHydrated }}>
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
