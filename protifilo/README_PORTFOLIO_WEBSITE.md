# News App 📰

A Flutter news application that allows users to explore the latest headlines, browse news by categories, and search for news articles in both English and Arabic through a clean and responsive mobile interface.

The application retrieves news data through a REST API and displays articles with their titles, images, authors, and publication dates. It provides separate home, search, and search results screens, making it easy for users to discover news and find articles related to specific topics.

---

## 📱 Screenshots

Screenshots are included in the `screenshots/` folder.

| Home Screen | Search Screen |
|:---:|:---:|
| <img src="./screenshots/HomeScreen.png" width="250" alt="News App home screen"> | <img src="./screenshots/SearchScreen.png" width="250" alt="News App search screen"> |

| English Search Results | Arabic Search Results |
|:---:|:---:|
| <img src="./screenshots/SearchResultScreenEN.png" width="250" alt="English news search results"> | <img src="./screenshots/SearchResultScreenAr.png" width="250" alt="Arabic news search results"> |

---

## ✨ Features

- Displays the latest news headlines retrieved from a REST API.
- Browse news articles by categories.
- Includes news categories such as Technology, Business, Travel, and Entertainment.
- Search for news articles using keywords.
- Supports English news search results.
- Supports Arabic news search results.
- Displays news articles with titles, images, authors, and publication dates when available.
- Uses dedicated screens for browsing news, searching, and displaying search results.
- Implements navigation between screens using GoRouter.
- Uses Dio / HTTP for API communication.
- Provides a clean and organized mobile user interface.
- Uses Flutter ScreenUtil to support responsive sizing.
- Separates application features into dedicated directories for better code organization.

---

## 🛠️ Technologies Used

- Flutter
- Dart
- REST API
- Dio / HTTP
- GoRouter
- Flutter ScreenUtil

---

## 📂 Project Structure

```text
lib/
├── Core/
│   ├── Styling/
│   └── App_Routes.dart
│
├── Features/
│   ├── HomeScreen/
│   │   ├── Models/
│   │   ├── Services/
│   │   ├── Widgets/
│   │   └── HomeScreen.dart
│   │
│   ├── SearchScreen/
│   │   ├── Widgets/
│   │   └── SearchScreen.dart
│   │
│   └── SearchResultScreen/
│       ├── Model/
│       ├── Services/
│       └── SearchResultScreen.dart
│
└── main.dart
```

---

## 🚀 Getting Started

To run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/kero12-eg/news_app.git
```

### 2. Open the Project Folder

```bash
cd news_app
```

### 3. Install Dependencies

```bash
flutter pub get
```

### 4. Configure the API Key

The application uses a news API to retrieve headlines and search results.

Add your API key to the appropriate API service configuration in the project.

Example:

```dart
const String apiKey = "YOUR_API_KEY";
```

Replace `YOUR_API_KEY` with your valid API key and make sure the key is configured according to the API provider's requirements.

**Important:** Do not commit private API keys to a public repository.

### 5. Run the Application

```bash
flutter run
```

Make sure Flutter is installed and an Android emulator or a physical device is configured.

---

## 🔌 API Integration

The application communicates with a REST API to retrieve news articles and display them dynamically in the interface.

API integration is used to support the main news browsing and search experiences, allowing users to explore available headlines and find articles related to their search queries.

The networking layer is organized separately from the UI, helping keep API communication and screen presentation easier to maintain.

The actual API provider, available endpoints, and required authentication depend on the API configuration used by the project.

---

## 🖼️ Application Screens

### Home Screen

The home screen provides access to the latest news headlines and available categories. Users can browse articles and discover news across different topics through an organized interface.

### Search Screen

The search screen allows users to enter keywords and find news articles related to their interests. It provides a dedicated interface for searching without relying exclusively on the main news feed.

### English Search Results

The English search results screen displays news articles matching an English search query. Each result can include an article title, image, author, and publication date, depending on the information returned by the API.

### Arabic Search Results

The Arabic search results screen supports searching with Arabic keywords and displaying the corresponding news articles. This provides an additional way for users to explore news in their preferred language.

---

## 🖼️ Screenshot File Names

Make sure the screenshot files are stored in the correct directory and use the following names:

```text
screenshots/HomeScreen.png
screenshots/SearchScreen.png
screenshots/SearchResultScreenEN.png
screenshots/SearchResultScreenAr.png
```

The image paths in this README should match the actual location and capitalization of the files in your repository.

---

## 👨‍💻 Developer

Developed by **Kirolos Emad**

GitHub: [@kero12-eg](https://github.com/kero12-eg)

---

## 📄 License

This project was developed for learning and portfolio purposes.
