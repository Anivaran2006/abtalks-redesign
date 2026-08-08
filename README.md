# AbTalks 60-Day Coding Challenge

A premium, mobile-first web application designed to track, motivate, and guide students through a 60-day rigorous coding challenge. Built with a focus on high-end aesthetics, engaging micro-interactions, and seamless user experience.

## ✨ Features

- **Mobile-First Design**: Optimized for a 390px viewport, providing a native app-like experience directly in the browser.
- **Premium Glassmorphism UI**: Deep gradients, frosted glass panels, and neon glow effects create an immersive environment.
- **Dynamic Dashboard**: Track your current streak, overall progress, and unlock achievements with gamified elements.
- **Gamified Submissions**: Satisfying success states with confetti, streak upgrades, and XP rewards upon submitting proof of work.
- **GitHub-style Challenge Calendar**: Visually track consistency with a robust 60-day contribution grid.
- **Edge-Case Handling**: Beautifully designed empty states, a resilient 404 page, and a motivational "Missed Day" recovery experience.

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Effects**: `canvas-confetti`

## 📂 Folder Structure

The project utilizes a highly scalable and modular architecture:

```text
src/
├── app/                  # Next.js App Router (Routes & Pages)
│   ├── dashboard/        # Main student dashboard
│   ├── day/[day]/        # Dynamic daily challenge routes
│   ├── empty-states/     # Showcase of edge-case UIs
│   ├── missed-day/       # Streak recovery experience
│   ├── submit/           # Proof of work submission form
│   └── layout.tsx        # Global layout with navigation
├── components/           # Reusable UI architecture
│   ├── features/         # Domain-specific components
│   │   ├── dashboard/    # Leaderboard, StreakCard, etc.
│   │   ├── forms/        # Submission form logic
│   │   └── landing/      # Hero, Trust, Features sections
│   ├── layout/           # TopBar & BottomNav
│   └── ui/               # Generic building blocks (Button, Card, Input)
├── hooks/                # Custom React hooks (e.g., useConfetti)
├── lib/                  # Utilities and centralized mock data
└── types/                # Global TypeScript interfaces
```

## 🗺️ Route Map

- `/` - **Landing Page**: Convincing hero, social proof, features, and CTA.
- `/dashboard` - **Dashboard**: Your hub for streaks, progress, leaderboard, and achievements.
- `/day/[day]` - **Challenge Details**: The specific tasks, learning objectives, and resources for a given day (e.g., `/day/12`).
- `/submit` - **Submit Proof**: Form to submit GitHub and LinkedIn links to verify daily work.
- `/missed-day` - **Streak Broken**: A motivational recovery page allowing the use of a "Streak Freeze".
- `/empty-states` - **Showcase**: A developer-only page displaying the various empty states (No Data, Missing Submissions, etc.).

## 🎨 Design Decisions

1. **Ambient Backgrounds & Depth**: We ditched flat dark backgrounds for a deep midnight void (`#09090b`) coupled with fixed radial gradients. Cards utilize an inner-ring bevel (`ring-white/5`) to simulate realistic frosted glass edges.
2. **Micro-Interactions**: Every button, input, and card utilizes Framer Motion to provide immediate, satisfying tactile feedback (scaling, glowing, and bouncing) to increase user engagement.
3. **Gamification**: We intentionally used colors like vibrant orange for streaks, emerald for success, and fuchsia for the AI mentor to draw the eye to critical progression metrics.
4. **Strict 390px Constraint**: To ensure a flawless mobile experience, the root layout is constrained to `max-w-[390px]`. On desktop, it acts as a sleek device simulator.

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anivaran2006/abtalks-redesign.git
   cd abtalks-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
