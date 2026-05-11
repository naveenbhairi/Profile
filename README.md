# Profile Folio - React Portfolio & Resume Builder

A modern, responsive, and interactive personal portfolio and resume page built with React, TypeScript, and Tailwind CSS. 

This project not only serves as a beautiful showcase of your skills, experience, and projects, but it also features a built-in "Editable Text" mechanism. You can click on various text fields to edit your details dynamically, and your changes are automatically saved to your browser's local storage.

## ✨ Features

- **Modern UI/UX:** Clean, sleek design featuring a glassmorphism header, ambient background glows, and soft shadows.
- **Interactive Editing:** Edit your profile details, project summaries, and experience directly on the page.
- **Local Persistence:** All edits are saved to `localStorage`, so your data remains intact upon refreshing.
- **Responsive Design:** Fully mobile-responsive layout that looks great on any screen size.
- **One-Click Resume Download:** A dedicated button to download your professional resume (PDF).
- **Iconography:** Beautiful, lightweight icons provided by Lucide React.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React
- **Build Tool:** Vite

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed on your machine.
- Node.js (v16 or higher recommended)

### Installation

1. Clone the repository (or download the files):
   ```bash
   git clone https://github.com/naveenbhairi/Profile.git
   cd Profile
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 🎨 Customizing Your Profile

- **Default Content:** You can update the `initialProfile` object inside `src/App.tsx` to permanently change the default boilerplate data.
- **Profile Photo:** Replace `src/profile-photo.jpg` with your own professional headshot.
- **Resume PDF:** Place your resume file in the `public` folder and name it `Naveen_Bhairi_ReactJs_Resume.pdf` (or update the `resumePath` constant in `src/App.tsx` to match your new file name).
- **Colors:** The current theme uses Tailwind's `blue` and `slate` palettes. You can customize these by updating the class names inside `src/App.tsx`.

## 📄 License

This project is open-source and available under the MIT License.