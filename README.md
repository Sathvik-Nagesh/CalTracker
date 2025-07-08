CalTracker: AI-Powered Nutrition & Fitness Tracker

CalTracker is a modern, AI-powered web application designed to help you effortlessly monitor your daily nutrition and fitness goals. Log meals using text or a photo, track your exercise, and visualize your progress with a clean, responsive interface.

✨ Key Features

    AI-Powered Food Logging:

        Text Search: Use natural language (e.g., "a cup of coffee and two eggs") to instantly get nutritional information.

        Photo Recognition: Snap a picture of your meal, and our Gemini-powered vision model will identify the food items and estimate their calories.

        Manual Entry: A simple form for when you need to log specific items with precision.

    Personalized Goals: Create a user profile with your age, weight, height, and activity level. The app automatically calculates your personalized daily calorie (TDEE) and macronutrient targets.

    Comprehensive Dashboard: Get an at-a-glance view of your day, including:

        Calories consumed vs. goal.

        A dynamic pie chart for macronutrient breakdown (Protein, Carbs, Fat).

        Water intake and exercise tracking.

    Intelligent Exercise Tracking: Log your physical activities, and the app uses AI to estimate the calories burned based on your weight and the exercise duration.

    Progress Visualization: Track your weight over time with an interactive line chart and review detailed logs from previous days.

    Secure & Persistent: Built with Firebase Authentication and Firestore, your data is securely stored and synced across sessions.

    Modern UI/UX:

        Clean, responsive design that works beautifully on desktop and mobile.

        Includes both Light and Dark modes.

🛠️ Tech Stack

    Frontend: React, TypeScript, TailwindCSS

    Backend & Database: Firebase (Authentication, Firestore)

    AI / Generative: Google Gemini API (gemini-2.5-flash-preview-04-17) for text and vision understanding.

    Charting: Recharts

    Icons: Lucide React

🚀 Getting Started

To get a local copy up and running, follow these simple steps.
Prerequisites

You will need a Firebase project and a Google Gemini API Key.

    Firebase:

        Go to the Firebase Console and create a new project.

        Enable Authentication (with Email/Password and Google providers).

        Set up Firestore as your database.

        In your project settings, find your web app's configuration object.

    Gemini API Key:

        Get your API key from Google AI Studio.

Installation & Configuration

    Clone the repo:
    Generated sh

          
    git clone https://github.com/your-username/CalTracker.git
    cd CalTracker

        

    IGNORE_WHEN_COPYING_START

Use code with caution. Sh
IGNORE_WHEN_COPYING_END

Configure Firebase:

    Open the firebase.ts file.

    Replace the placeholder firebaseConfig object with the configuration from your own Firebase project.

Configure Gemini API Key:

    This project is configured to use an environment variable for the API key. You will need to set up a way for process.env.API_KEY to be available in your development environment. For example, using a .env file and a build tool like Vite or Create React App.

    Create a .env file in the root of your project:
    Generated code

          
    VITE_API_KEY=YOUR_GEMINI_API_KEY_HERE

        

    IGNORE_WHEN_COPYING_START

    Use code with caution.
    IGNORE_WHEN_COPYING_END

    (Note: If not using Vite, prefix may vary. The code expects process.env.API_KEY)

Run the app:

    This project uses a modern, build-free setup with ES modules and import maps. You can serve it with any simple static server.

Generated sh

      
# If you have Node.js, you can use 'serve'
npx serve

    

IGNORE_WHEN_COPYING_START

    Use code with caution. Sh
    IGNORE_WHEN_COPYING_END

        Open your browser to the local address provided (e.g., http://localhost:3000).

📁 Project Structure
Generated code

      
/
├── components/         # React components (UI, features)
│   ├── ui/             # Reusable generic UI components (Card, Loader)
│   ├── Dashboard.tsx   # Main dashboard view
│   ├── LogFood.tsx     # Modal for logging food
│   ├── Profile.tsx     # User profile creation/editing
│   └── ...             # Other feature components
├── context/            # React context for global state management
│   └── AppContext.tsx  # Manages user, profile, logs, auth
├── services/           # External API interactions
│   ├── geminiService.ts# Functions for calling the Gemini API
│   └── calorieService.ts# Business logic (TDEE calculation)
├── App.tsx             # Main application component with routing
├── firebase.ts         # Firebase initialization and configuration
├── index.html          # Entry point, includes import maps and TailwindCSS setup
└── index.tsx           # React root renderer

    

IGNORE_WHEN_COPYING_START
Use code with caution.
IGNORE_WHEN_COPYING_END
🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

    Fork the Project

    Create your Feature Branch (git checkout -b feature/AmazingFeature)

    Commit your Changes (git commit -m 'Add some AmazingFeature')

    Push to the Branch (git push origin feature/AmazingFeature)

    Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.
