# Firebase Social Media Project

A modern social media application built with React, TypeScript, and Firebase, featuring a clean and intuitive user interface for creating and interacting with posts.

## Features

- 🔐 User Authentication
- ✨ Create and share posts
- ❤️ Like and unlike posts
- 👤 User profiles
- 📱 Responsive design
- 🎨 Modern UI with smooth animations

## Tech Stack

- **Frontend:**

  - React
  - TypeScript
  - CSS3
  - React Router DOM
  - React Firebase Hooks

- **Backend:**
  - Firebase Authentication
  - Firebase Firestore
  - Firebase Storage

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- A Firebase account

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tharindu-Theekshana/Firebase-Social-Media-Project.git
   cd Firebase-Social-Media-Project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Firebase Setup**

   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Create a new web app in your Firebase project
   - Copy your Firebase configuration

4. **Environment Setup**

   - Create a `.env` file in the root directory
   - Add your Firebase configuration:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

5. **Start the development server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/        # Firebase configuration
├── pages/         # Page components
│   ├── auth/      # Authentication pages
│   └── main/      # Main application pages
├── styles/        # CSS styles
└── App.tsx        # Root component
```

## Features in Detail

### Authentication

- Email/Password authentication
- Protected routes
- User session management

### Posts

- Create new posts with title and description
- View all posts in a feed
- Like and unlike posts
- Real-time updates

### User Interface

- Clean and modern design
- Responsive layout
- Interactive elements with smooth animations
- User-friendly navigation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Firebase for providing an excellent backend-as-a-service platform
- React team for the amazing frontend framework
- All contributors who have helped shape this project
