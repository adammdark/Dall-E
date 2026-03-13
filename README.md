# 🎨 DALL-E 

A full-stack Midjourney/DALL·E inspired web application built with the **MERN stack** that lets users generate stunning AI images using natural language prompts and share them with the community.

![AI Image Generator Banner](https://img.shields.io/badge/AI-Image%20Generator-blueviolet?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge)
![Pixazo API](https://img.shields.io/badge/Pixazo-Flux%20Schnell-orange?style=for-the-badge)

---

## ✨ Features

- 🖼️ **AI Image Generation** — Generate high-quality images using the **Flux Schnell** model via the **Pixazo API**
- 🎲 **Random Prompt Suggestions** — Instantly get creative prompt ideas with one click
- ✍️ **Custom Prompts** — Manually enter your own prompts for full creative control
- 🚀 **Community Sharing** — Submit your generated images to the public gallery
- 🏠 **Home Gallery** — Browse all shared creations on the home page
- 🔍 **Hover Preview** — Hovering over any image reveals the creator's name and the prompt used
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI library
- **Tailwind CSS / CSS** — Styling

### Backend
- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **MongoDB** — Database (via Mongoose)

### AI
- **Pixazo API** — AI image generation
- **Model:** `flux-schnell` — Fast, high-quality image generation

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- A [Pixazo API](https://pixzelo.com/) key

---

### ⚙️ Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/Dall-E.git

cd Dall-E
```

#### 2. Setup the Backend

```bash
cd backend

npm install
```

Create a `.env` file in the `/backend` directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
PIXAZOO_API_KEY=your_pixazo_api_key
```

Start the server:

```bash
npm run start
```

#### 3. Setup the Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/post` | Fetch all shared images |
| `POST` | `/api/v1/post` | Share a generated image |
| `POST` | `/api/v1/dalle` | Generate an image from a prompt |

---

## 🎮 How to Use

1. **Enter your name** in the name field
2. **Write a prompt** or click **"Surprise Me"** to get a random one
3. Click **"Generate"** to create your AI image
4. Like what you see? Hit **"Share with the Community"** to post it to the gallery
5. Visit the **Home** page to browse all community creations — hover to see names & prompts!

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 🤝 Acknowledgements

- [Pixazo](https://pixazo.ai/) for the Flux Schnell AI model API
- Inspired by [Midjourney](https://midjourney.com/) and [DALL·E](https://openai.com/dall-e)
- The MERN stack community
- Special thanks & credits to [jsmastry](https://github.com/adrianhajdin) for the inspiration and guidance that helped bring this project to life.

---

<p align="center">Made with ❤️ and a lot of creative prompts</p>
<p align="center">⭐ **Star this repo** if you find it useful!</p>
