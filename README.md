Project Overview
This is a React-based Weather Forecasting Application that allows users to search for weather information of any city worldwide. It's built using modern React 19 with Vite as the build tool and Material-UI for styling.

Technology Stack
Frontend Framework: React 19.0.0
Build Tool: Vite 6.2.0
UI Library: Material-UI (MUI)
Styling: CSS3 with custom stylesheets
API: OpenWeatherMap API
Development Tools: ESLint for code quality

Project Architecture & Component Structure
1. Entry Point (main.jsx)
2. Main App Component (App.jsx)

API Integration:
Endpoint: https://api.openweathermap.org/data/2.5/weather
API Key: Hardcoded (in production, should be environment variable)
Parameters: City name, API key, metric units
Data Processing: Transforms API response into application-specific format
Error Handling: Shows error message for invalid city searches

Features:
Material-UI Card component
Dynamic weather images based on conditions:
Hot weather (>15°C): Summer image
Cold weather (≤15°C): Cold weather image
Humid conditions (>60% humidity): Rainy weather image
Data Display: Shows all weather metrics in a user-friendly format
Key Features & Functionality

1. City Search
Users can enter any city name
Real-time API calls to OpenWeatherMap
Input validation and error handling
Form submission with Enter key or button click

2. Weather Data Display
Current temperature with feels-like temperature
Min/Max temperature range
Humidity percentage
Weather description (e.g., "haze", "clear sky")
Visual weather representation through images

3. Responsive Design
Material-UI components for consistent styling
Centered layout with proper spacing
Card-based information display
Mobile-friendly design

integration, state management, and modern web development practices!
