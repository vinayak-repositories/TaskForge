# 🧠 TaskForge

**TaskForge** is a real-time, collaborative Kanban board application inspired by productivity tools like Trello and Notion. Designed to enhance team coordination and individual task management, TaskForge provides a sleek, intuitive interface that helps users organize work efficiently across customizable boards and columns.

Built with cutting-edge technologies like **Next.js**, **Tailwind CSS**, and **Liveblocks**, TaskForge supports seamless multiplayer experiences — enabling users to see updates, comments, and task movements in real-time. Whether you're planning a project solo or working within a distributed team, TaskForge ensures your workflow stays structured, synchronized, and visually clean.

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

<table>
  <thead>
    <tr>
      <th style="text-align:left">Technology</th>
      <th style="text-align:left; padding-left:24px;">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left"><a href="https://nextjs.org/">Next.js</a></td>
      <td align="left" style="padding-left:24px;">React framework for SSR & routing</td>
    </tr>
    <tr>
      <td align="left"><a href="https://tailwindcss.com/">Tailwind CSS</a></td>
      <td align="left" style="padding-left:24px;">Utility-first CSS framework</td>
    </tr>
    <tr>
      <td align="left"><a href="https://liveblocks.io/">Liveblocks</a></td>
      <td align="left" style="padding-left:24px;">Real-time presence & collaboration</td>
    </tr>
    <tr>
      <td align="left"><a href="https://next-auth.js.org/">NextAuth.js</a></td>
      <td align="left" style="padding-left:24px;">Authentication (Google OAuth)</td>
    </tr>
    <tr>
      <td align="left"><a href="https://mongodb.com/">MongoDB</a></td>
      <td align="left" style="padding-left:24px;">NoSQL database for storing users</td>
    </tr>
  </tbody>
</table>

---

## 📸 Screenshots

### 🧭 Dashboard
<p align="center">
  <img src="public/screenshots/dashboard.png" alt="Dashboard" />
</p>

### 🗂️ Board View
<p align="center">
  <img src="public/screenshots/hero.png" alt="Board View Screenshot" />
</p>

### 🪟 Card Modal
<p align="center">
  <img src="public/screenshots/modal.png" alt="Card Modal Screenshot" />
</p>


---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Igneel0601/TaskForge.git
cd TaskForge

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start the development server
npm run dev