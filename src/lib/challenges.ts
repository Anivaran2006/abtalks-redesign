// Full 60-day challenge catalog for the Explore page

export type Challenge = {
  day: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  estTime: string;
  tags: string[];
  description: string;
};

export const TOPICS = ["All", "Algorithms", "System Design", "Frontend", "Backend", "Databases", "DevOps", "Security"] as const;
export type Topic = typeof TOPICS[number];

export const CHALLENGES: Challenge[] = [
  { day: 1, title: "Two Sum", difficulty: "Easy", topic: "Algorithms", estTime: "30 mins", tags: ["Array", "Hash Map"], description: "Find two numbers that add up to a target. Classic intro to hash maps." },
  { day: 2, title: "Valid Parentheses", difficulty: "Easy", topic: "Algorithms", estTime: "30 mins", tags: ["Stack", "String"], description: "Use a stack to validate bracket sequences. A common interview warm-up." },
  { day: 3, title: "Build a Responsive Navbar", difficulty: "Easy", topic: "Frontend", estTime: "45 mins", tags: ["HTML", "CSS", "Responsive"], description: "Build a mobile-first navigation bar with a hamburger menu from scratch." },
  { day: 4, title: "Fibonacci with Memoization", difficulty: "Easy", topic: "Algorithms", estTime: "30 mins", tags: ["Dynamic Programming", "Recursion"], description: "Optimize the classic Fibonacci function using memoization." },
  { day: 5, title: "REST API with Express", difficulty: "Medium", topic: "Backend", estTime: "1 hour", tags: ["Node.js", "Express", "REST"], description: "Build a CRUD REST API for a todo list with Express.js." },
  { day: 6, title: "Binary Search", difficulty: "Easy", topic: "Algorithms", estTime: "30 mins", tags: ["Array", "Search"], description: "Implement binary search and understand the divide-and-conquer pattern." },
  { day: 7, title: "CSS Grid Layout", difficulty: "Easy", topic: "Frontend", estTime: "45 mins", tags: ["CSS", "Grid", "Layout"], description: "Master CSS Grid by building a magazine-style two-dimensional layout." },
  { day: 8, title: "JWT Authentication", difficulty: "Medium", topic: "Security", estTime: "1.5 hours", tags: ["Auth", "JWT", "Node.js"], description: "Implement stateless authentication using JSON Web Tokens." },
  { day: 9, title: "SQL Joins Deep Dive", difficulty: "Medium", topic: "Databases", estTime: "1 hour", tags: ["SQL", "PostgreSQL", "Joins"], description: "Write complex multi-table JOIN queries including LEFT, RIGHT, and FULL joins." },
  { day: 10, title: "React useState Mastery", difficulty: "Easy", topic: "Frontend", estTime: "45 mins", tags: ["React", "Hooks", "State"], description: "Build a multi-step form using only useState to manage complex UI state." },
  { day: 11, title: "Merge Sort", difficulty: "Medium", topic: "Algorithms", estTime: "1 hour", tags: ["Sorting", "Recursion", "Divide & Conquer"], description: "Implement merge sort from scratch and understand O(n log n) complexity." },
  { day: 12, title: "Build a Global State Manager", difficulty: "Hard", topic: "Frontend", estTime: "1.5 hours", tags: ["React", "Context", "useReducer"], description: "Build a custom state management solution using React Context and useReducer." },
  { day: 13, title: "Docker Basics", difficulty: "Medium", topic: "DevOps", estTime: "1.5 hours", tags: ["Docker", "Containers", "CLI"], description: "Containerize a Node.js app using Docker and write your first Dockerfile." },
  { day: 14, title: "WebSockets Chat App", difficulty: "Hard", topic: "Backend", estTime: "2 hours", tags: ["WebSockets", "Socket.io", "Real-time"], description: "Build a real-time group chat app using Socket.io and Node.js." },
  { day: 15, title: "Database Indexing", difficulty: "Medium", topic: "Databases", estTime: "1 hour", tags: ["PostgreSQL", "Indexes", "Performance"], description: "Add indexes to a slow query and measure the performance difference." },
  { day: 16, title: "React Custom Hooks", difficulty: "Medium", topic: "Frontend", estTime: "1 hour", tags: ["React", "Hooks", "Abstraction"], description: "Extract reusable logic into custom hooks: useFetch, useLocalStorage, useDebounce." },
  { day: 17, title: "Rate Limiter Middleware", difficulty: "Hard", topic: "Backend", estTime: "1.5 hours", tags: ["Node.js", "Redis", "Middleware"], description: "Implement a sliding-window rate limiter using Redis and Express middleware." },
  { day: 18, title: "Graph BFS & DFS", difficulty: "Medium", topic: "Algorithms", estTime: "1 hour", tags: ["Graph", "BFS", "DFS"], description: "Traverse a graph using both breadth-first and depth-first search algorithms." },
  { day: 19, title: "CI/CD Pipeline", difficulty: "Hard", topic: "DevOps", estTime: "2 hours", tags: ["GitHub Actions", "CI/CD", "Automation"], description: "Set up a full CI/CD pipeline that runs tests and deploys on push." },
  { day: 20, title: "OAuth 2.0 Integration", difficulty: "Hard", topic: "Security", estTime: "2 hours", tags: ["OAuth", "Google", "Auth"], description: "Add Google OAuth login to a Node.js app using Passport.js." },
  { day: 21, title: "Linked List Reversal", difficulty: "Easy", topic: "Algorithms", estTime: "30 mins", tags: ["Linked List", "Pointers"], description: "Reverse a singly linked list both iteratively and recursively." },
  { day: 22, title: "Framer Motion Animations", difficulty: "Medium", topic: "Frontend", estTime: "1 hour", tags: ["React", "Animation", "Framer Motion"], description: "Create stunning page transitions and micro-animations with Framer Motion." },
  { day: 23, title: "Redis Caching", difficulty: "Medium", topic: "Backend", estTime: "1 hour", tags: ["Redis", "Caching", "Performance"], description: "Add Redis caching to an API endpoint and cut response time by 90%." },
  { day: 24, title: "Database Migrations", difficulty: "Medium", topic: "Databases", estTime: "1 hour", tags: ["Prisma", "Migrations", "Schema"], description: "Write and roll back database migrations using Prisma." },
  { day: 25, title: "Load Balancing", difficulty: "Hard", topic: "System Design", estTime: "2 hours", tags: ["Nginx", "Load Balancing", "Scaling"], description: "Configure Nginx as a load balancer across multiple Node.js instances." },
  { day: 26, title: "Quick Sort", difficulty: "Medium", topic: "Algorithms", estTime: "45 mins", tags: ["Sorting", "Partitioning"], description: "Implement QuickSort and understand pivot selection strategies." },
  { day: 27, title: "TypeScript Generics", difficulty: "Medium", topic: "Frontend", estTime: "1 hour", tags: ["TypeScript", "Generics", "Types"], description: "Write reusable, type-safe functions and data structures with TypeScript generics." },
  { day: 28, title: "Message Queue with BullMQ", difficulty: "Hard", topic: "Backend", estTime: "2 hours", tags: ["BullMQ", "Queue", "Workers"], description: "Offload slow tasks to a background worker queue using BullMQ and Redis." },
  { day: 29, title: "SQL Window Functions", difficulty: "Hard", topic: "Databases", estTime: "1.5 hours", tags: ["SQL", "Analytics", "Window Functions"], description: "Write advanced queries using RANK, ROW_NUMBER, and LAG/LEAD." },
  { day: 30, title: "Design a URL Shortener", difficulty: "Hard", topic: "System Design", estTime: "2 hours", tags: ["System Design", "Hashing", "Scalability"], description: "Design bit.ly from scratch: storage, collisions, redirection, and analytics." },
  { day: 31, title: "Trie Data Structure", difficulty: "Medium", topic: "Algorithms", estTime: "1 hour", tags: ["Trie", "Prefix Tree", "Search"], description: "Build a Trie and implement autocomplete search functionality." },
  { day: 32, title: "Next.js App Router", difficulty: "Medium", topic: "Frontend", estTime: "1.5 hours", tags: ["Next.js", "App Router", "RSC"], description: "Migrate a pages-router app to the new App Router with server components." },
  { day: 33, title: "GraphQL API", difficulty: "Hard", topic: "Backend", estTime: "2 hours", tags: ["GraphQL", "Apollo", "Schema"], description: "Replace a REST API with GraphQL: schema design, resolvers, and mutations." },
  { day: 34, title: "Database Connection Pooling", difficulty: "Medium", topic: "Databases", estTime: "1 hour", tags: ["PostgreSQL", "Connection Pooling", "PgBouncer"], description: "Set up PgBouncer to handle thousands of concurrent database connections." },
  { day: 35, title: "Kubernetes Basics", difficulty: "Hard", topic: "DevOps", estTime: "2.5 hours", tags: ["Kubernetes", "Pods", "Deployments"], description: "Deploy a containerized app to Kubernetes with pods, services, and deployments." },
  { day: 36, title: "Heap & Priority Queue", difficulty: "Medium", topic: "Algorithms", estTime: "1 hour", tags: ["Heap", "Priority Queue", "Greedy"], description: "Implement a min-heap and solve the Top-K Elements problem." },
  { day: 37, title: "React Server Components", difficulty: "Hard", topic: "Frontend", estTime: "2 hours", tags: ["Next.js", "RSC", "Streaming"], description: "Leverage React Server Components for zero-JS data fetching and streaming." },
  { day: 38, title: "Microservices Architecture", difficulty: "Hard", topic: "System Design", estTime: "2.5 hours", tags: ["Microservices", "API Gateway", "Docker"], description: "Decompose a monolith into microservices communicating over an API gateway." },
  { day: 39, title: "SQL Sharding", difficulty: "Hard", topic: "Databases", estTime: "2 hours", tags: ["Sharding", "Scalability", "Partitioning"], description: "Design and implement horizontal sharding for a high-traffic database." },
  { day: 40, title: "Penetration Testing Basics", difficulty: "Hard", topic: "Security", estTime: "2 hours", tags: ["Security", "OWASP", "Testing"], description: "Run basic penetration tests against a test API using OWASP tools." },
  { day: 41, title: "Dynamic Programming", difficulty: "Hard", topic: "Algorithms", estTime: "2 hours", tags: ["DP", "Tabulation", "Memoization"], description: "Solve the Knapsack and Longest Common Subsequence problems using DP." },
  { day: 42, title: "Accessibility in React", difficulty: "Medium", topic: "Frontend", estTime: "1.5 hours", tags: ["a11y", "ARIA", "Keyboard Nav"], description: "Audit and fix accessibility issues in a React app: ARIA labels, focus management, color contrast." },
  { day: 43, title: "Event-Driven Architecture", difficulty: "Hard", topic: "Backend", estTime: "2 hours", tags: ["Events", "Kafka", "Architecture"], description: "Build a decoupled event-driven system using Kafka for inter-service communication." },
  { day: 44, title: "Design a Notification System", difficulty: "Hard", topic: "System Design", estTime: "2.5 hours", tags: ["System Design", "Push", "Pub/Sub"], description: "Design scalable push notifications: fanout, batching, delivery guarantees." },
  { day: 45, title: "CSS Variables & Theming", difficulty: "Easy", topic: "Frontend", estTime: "45 mins", tags: ["CSS", "Variables", "Dark Mode"], description: "Build a dynamic theme switcher using CSS custom properties." },
  { day: 46, title: "LRU Cache", difficulty: "Hard", topic: "Algorithms", estTime: "1.5 hours", tags: ["Cache", "Linked List", "Hash Map"], description: "Implement a Least Recently Used cache from scratch using a doubly linked list." },
  { day: 47, title: "Serverless Functions", difficulty: "Medium", topic: "Backend", estTime: "1 hour", tags: ["Serverless", "Vercel", "Lambda"], description: "Deploy a serverless API function with Vercel Edge Functions." },
  { day: 48, title: "Service Mesh with Istio", difficulty: "Hard", topic: "DevOps", estTime: "3 hours", tags: ["Istio", "Service Mesh", "Kubernetes"], description: "Add observability and traffic management to microservices with Istio." },
  { day: 49, title: "Input Sanitization & XSS", difficulty: "Medium", topic: "Security", estTime: "1 hour", tags: ["XSS", "Sanitization", "Security"], description: "Fix common XSS vulnerabilities and implement robust input sanitization." },
  { day: 50, title: "Design a Search Engine", difficulty: "Hard", topic: "System Design", estTime: "2.5 hours", tags: ["Inverted Index", "Crawling", "Ranking"], description: "Design a search engine: crawling, indexing with an inverted index, and ranking." },
  { day: 51, title: "Segment Tree", difficulty: "Hard", topic: "Algorithms", estTime: "2 hours", tags: ["Segment Tree", "Range Queries"], description: "Build a segment tree for efficient range sum queries and point updates." },
  { day: 52, title: "React Performance", difficulty: "Hard", topic: "Frontend", estTime: "2 hours", tags: ["React", "Profiler", "Optimization"], description: "Use React DevTools Profiler to identify and fix unnecessary re-renders." },
  { day: 53, title: "CQRS Pattern", difficulty: "Hard", topic: "Backend", estTime: "2 hours", tags: ["CQRS", "Architecture", "Commands"], description: "Separate read and write models using the Command Query Responsibility Segregation pattern." },
  { day: 54, title: "Time-Series Databases", difficulty: "Hard", topic: "Databases", estTime: "2 hours", tags: ["InfluxDB", "Time-Series", "Metrics"], description: "Store and query metrics using InfluxDB and visualize with Grafana." },
  { day: 55, title: "Feature Flags", difficulty: "Medium", topic: "DevOps", estTime: "1.5 hours", tags: ["Feature Flags", "LaunchDarkly", "A/B Testing"], description: "Implement feature flags to safely release features to a subset of users." },
  { day: 56, title: "Dijkstra's Algorithm", difficulty: "Hard", topic: "Algorithms", estTime: "2 hours", tags: ["Graph", "Shortest Path", "Greedy"], description: "Implement Dijkstra's algorithm to find the shortest path in a weighted graph." },
  { day: 57, title: "Web Performance Audit", difficulty: "Medium", topic: "Frontend", estTime: "1.5 hours", tags: ["Lighthouse", "Core Web Vitals", "Performance"], description: "Run a Lighthouse audit and achieve a 90+ score on all Core Web Vitals." },
  { day: 58, title: "Design Twitter's Feed", difficulty: "Hard", topic: "System Design", estTime: "3 hours", tags: ["Fan-out", "Timeline", "Caching"], description: "Design Twitter's home timeline at massive scale using pull vs. push fan-out." },
  { day: 59, title: "Zero-Downtime Deployment", difficulty: "Hard", topic: "DevOps", estTime: "2 hours", tags: ["Blue-Green", "Canary", "Deployment"], description: "Implement blue-green and canary deployment strategies to achieve zero downtime." },
  { day: 60, title: "Build Your Portfolio Project", difficulty: "Hard", topic: "Frontend", estTime: "4 hours", tags: ["Capstone", "Full-Stack", "Portfolio"], description: "Build and deploy a full-stack capstone project showcasing everything you've learned." },
];
