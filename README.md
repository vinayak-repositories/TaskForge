# 🧠 TaskForge

**TaskForge** is a real-time collaborative Kanban board inspired by tools like Trello. It helps individuals and teams manage tasks with clarity and structure. Built using modern web technologies like Next.js and Liveblocks, TaskForge emphasizes collaboration and productivity in a clean desktop-first interface.

<p align="center">
  <img src="public/screenshots/hero.png" alt="TaskForge Hero Screenshot" width="100%" />
</p>

---

## 🚀 Features

- 📝 Create, edit, and delete task cards
- 🧲 Drag-and-drop cards across columns
- 🧑‍🤝‍🧑 Real-time collaboration with Liveblocks
- 🧵 Comment threads and discussions on tasks
- 🔐 Google OAuth authentication via NextAuth
- 📦 Persistent storage with MongoDB
- 💻 Designed primarily for desktop usage

---

## 🛠️ Tech Stack

| Technology     | Purpose                         |
|----------------|----------------------------------|
| [Next.js](https://nextjs.org/)        | React framework for SSR & routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework       |
| [Liveblocks](https://liveblocks.io/)   | Real-time presence & collaboration |
| [NextAuth.js](https://next-auth.js.org/) | Authentication (Google OAuth)     |
| [MongoDB](https://mongodb.com/)       | NoSQL database for storing boards |

---

## 📸 Screenshots

| Dashboard | Board View | Card Modal |
|----------|------------|------------|
| ![Dashboard](public/screenshots/dashboard.png) | ![Board](public/screenshots/board.png) | ![Modal](public/screenshots/modal.png) |

> 💡 Save your images in `public/screenshots/` and replace these placeholders.

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/taskforge.git
cd taskforge

# Install dependencies
npm install

# Copy and fill in your environment variables
cp .env.example .env.local
