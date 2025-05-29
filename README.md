# MediMitra - Medicine Management System

MediMitra is a full-stack web application that helps users manage their family's medicine schedules. It features OCR and Speech-to-Text capabilities for prescription processing, along with Google Home integration for reminders.

## Features

- 🔐 User authentication and family member management
- 📝 Prescription processing via OCR (EasyOCR) and Speech-to-Text (Gemini API)
- 👨‍👩‍👧‍👦 Family member medicine management
- ⏰ Reminder scheduling with Google Home integration
- 📱 Mobile app support via Expo WebView

## Tech Stack

### Backend
- FastAPI (Python)
- MongoDB Atlas
- EasyOCR for image processing
- Google Gemini API for text processing
- Python scheduler for reminders

### Frontend
- Next.js
- TailwindCSS
- Responsive design for mobile

### Mobile
- Expo
- React Native WebView
- Native notifications support

## Project Structure

```
MediMitra/
├── model/                 # Backend (FastAPI)
│   ├── server.py         # Main API server
│   ├── scheduler.py      # Reminder scheduler
│   └── requirements.txt  # Python dependencies
├── interface/            # Frontend (Next.js)
│   ├── app/             # Next.js app directory
│   └── public/          # Static assets
└── MediMitraMobile/     # Mobile app (Expo)
    ├── App.js           # Main app component
    └── app.json         # Expo configuration
```

## Setup Instructions

### Backend Setup

1. Install Python dependencies:
   ```bash
   cd model
   pip install -r requirements.txt
   ```

2. Set up environment variables:
   ```bash
   # Create .env file
   GEMINI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_uri
   SCHEDULE_FILE_PATH=schedule.json
   ```

3. Run the server:
   ```bash
   uvicorn server:app --reload
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd interface
   npm install
   ```

2. Set environment variables:
   ```bash
   # Create .env.local
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### Mobile App Setup

1. Install Expo CLI:
   ```bash
   npm install -g expo-cli
   ```

2. Install dependencies:
   ```bash
   cd MediMitraMobile
   npm install
   ```

3. Run the app:
   ```bash
   npx expo start
   ```

## Deployment

### Backend (Railway)
1. Create a Railway account
2. Connect your GitHub repository
3. Set environment variables
4. Deploy the backend

### Frontend (Vercel)
1. Create a Vercel account
2. Import your GitHub repository
3. Set environment variables
4. Deploy the frontend

### Mobile App (Expo)
1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Configure build:
   ```bash
   eas build:configure
   ```
3. Build Android APK:
   ```bash
   eas build -p android --profile preview
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
