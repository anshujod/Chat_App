# ✨ Chatify - Full-Stack Real-time Chat Application

A modern, full-stack chat application built with the MERN stack (MongoDB, Express, React, Node.js), featuring real-time messaging, secure authentication, and a beautiful UI.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.io.
- **Secure Authentication**: JWT-based auth with HTTP-only cookies.
- **Image Support**: Upload and share images via Cloudinary.
- **Online Status**: Real-time user presence indicators.
- **Email Notifications**: Welcome emails served by Resend.
- **Security**: Rate limiting and bot protection with Arcjet.
- **Modern UI**: Responsive design with Tailwind CSS and DaisyUI.
- **State Management**: Robust state handling with Zustand.

## 🛠️ Tech Stack

### Backend
- **Node.js & Express**: API server and routing.
- **MongoDB & Mongoose**: Database and object modeling.
- **Socket.io**: Real-time bidirectional event-based communication.
- **JWT (JSON Web Tokens)**: Secure user authentication.
- **Cloudinary**: Cloud storage for media assets.
- **Arcjet**: Security and rate limiting.
- **Resend**: Email infrastructure.

### Frontend
- **React**: UI library.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework.
- **DaisyUI**: Component library for Tailwind.
- **Zustand**: Small, fast, and scalable state management.
- **Lucide React**: Beautiful & consistent icons.
- **Axios**: Promise-based HTTP client.

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local service or Atlas cluster)

You will also need API keys for:
- [Cloudinary](https://cloudinary.com/) (Image uploads)
- [Resend](https://resend.com/) (Emails) - *Optional if you mock it*
- [Arcjet](https://arcjet.com/) (Security) - *Optional if you mock it*

## 📥 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat_app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the **`backend/`** directory (not the root).
   
   ```bash
   # backend/.env

   PORT=3000
   MONGO_URI=mongodb+srv://<your_connection_string>
   NODE_ENV=development
   JWT_SECRET=<your_super_secret_key>
   CLIENT_URL=http://localhost:5173

   # Cloudinary (Required for images)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Resend (Optional - required for emails)
   RESEND_API_KEY=re_123456789
   EMAIL_FROM=onboarding@resend.dev
   EMAIL_FROM_NAME=Chatify

   # Arcjet (Optional - required for rate limiting)
   ARCJET_KEY=aj_123456789
   ARCJET_ENV=development
   ```

## 🏃‍♂️ Running the App

You need to run the backend and frontend servers concurrently. Open two terminal instances:

**Terminal 1 (Backend)**
```bash
cd backend
npm run dev
```
_Server will start on http://localhost:3000_

**Terminal 2 (Frontend)**
```bash
cd frontend
npm run dev
```
_Frontend will start on http://localhost:5173_

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
