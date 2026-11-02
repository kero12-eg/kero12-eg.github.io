# E-Commerce App 🛍️

A Flutter e-commerce mobile application designed to provide a straightforward shopping experience. Users can create an account or sign in, explore a product catalog, browse products by category, search by title, inspect product details, and manage items in a locally saved shopping cart.

The project combines a responsive Flutter interface with REST API integration, Cubit/BLoC state management, structured repositories, navigation, and local storage.

---

## 📱 Screenshots

Screenshots are included in the `protiflo/shots/` folder.

| Login Screen | Create Account Screen |
|:---:|:---:|
| <img src="./shots/LoginScreen.jpeg" width="250" alt="Login screen"> | <img src="./shots/RegisterScreen.jpeg" width="250" alt="Create account screen"> |

| Discover Products | Product Details |
|:---:|:---:|
| <img src="./shots/HomeScreen.jpeg" width="250" alt="Discover products screen"> | <img src="./shots/ProductDetailsScreen.jpeg" width="250" alt="Product details screen"> |

| Shopping Cart | Account |
|:---:|:---:|
| <img src="./shots/CartScreen.jpeg" width="250" alt="Shopping cart screen"> | <img src="./shots/AccountScreen.jpeg" width="250" alt="Account screen"> |

| Address Book |
|:---:|
| <img src="./shots/AddressScreen.jpeg" width="250" alt="Address book screen"> |

---

## 🎯 Project Overview

The application presents a product-discovery flow inspired by modern shopping apps. The home screen retrieves products and categories from a REST API, while search and category selection help users narrow the catalog. Selecting a product opens a separate details screen with the product image, description, and price.

A cart feature lets users add products, adjust quantities, and remove items. Cart data is saved locally, so it can be loaded again when the app is reopened. Authentication screens support account registration and login through the API, and tokens received after login are stored securely on the device.

The account area includes entries for account-related sections, an address-book screen, and a logout action.

---

## ✨ Key Features

### 🔐 Authentication

- Login and account registration forms.
- Input validation on the authentication screens.
- API-based registration and login requests.
- Secure local storage for access and refresh tokens after login.
- Logout action that clears stored authentication tokens.

### 🛍️ Product Discovery

- Retrieve products and categories from the EscuelaJS Fake Store API.
- Browse the catalog by category, including an All category.
- Search products by title.
- Show products in a visual grid with images and prices.

### 📦 Product Details

- Separate details screen for a selected product.
- Display the product image, title, description, and price.
- Add the selected product to the cart.
- Show feedback when a product is added to the cart.

### 🛒 Shopping Cart

- Save selected products locally with `SharedPreferences`.
- Increase or decrease the quantity of an item.
- Remove items from the cart.
- Restore the saved cart when opening the cart screen.
- Display a cart summary and checkout entry point.

### 👤 Account & Address Book

- Account screen with navigation entries for account-related sections.
- Address-book screen displaying saved-address-style entries.
- Logout confirmation dialog.

### 📱 User Interface

- Responsive sizing with `flutter_screenutil`.
- Shared theme, colors, typography, text fields, and buttons.
- Bottom navigation for Home, Cart, and Account.
- Dedicated screens for authentication, product browsing, product details, cart, account, address book, and splash.

---

## 🛠️ Technologies & Tools

- **Flutter & Dart** — application UI and logic.
- **Dio** — REST API communication.
- **EscuelaJS Fake Store API** — product catalog, categories, registration, and login.
- **flutter_bloc (Cubit)** — state management for authentication, categories, products, and cart.
- **dartz** — typed success/failure results in repositories.
- **get_it** — dependency injection.
- **go_router** and **go_transitions** — navigation and transitions.
- **shared_preferences** — persistent cart storage.
- **flutter_secure_storage** — secure token storage.
- **flutter_screenutil** — responsive layout sizing.
- **lottie** — animation support.
- **pretty_dio_logger** — API request logging during development.
- **animated_snack_bar** — status and feedback messages.
- **shimmer**, **intl**, and **flutter_staggered_animations** — UI utility packages declared in the project.

---

## 🏗️ Architecture & Code Organization

The codebase is separated into a shared `Core` layer and a feature-oriented `Features` layer.

- **Core/networking:** API endpoint constants and the Dio helper.
- **Core/Routing:** route names and generated router configuration.
- **Core/Styling:** app colors, fonts, theme, text fields, loading widgets, and primary buttons.
- **Core/utils:** service locator, storage helper, and animated snack-bar utility.
- **Features/Auth:** login and registration screens, Cubit/state, models, and repository.
- **Features/main/home:** product/category models, Cubits, repository, and product UI.
- **Features/main/detailsscreen:** product detail presentation and add-to-cart action.
- **Features/main/cart:** cart models, Cubit/state, repository, cart UI, and cart item widgets.
- **Features/main/account:** account and address-book screens.
- **Features/splash:** splash screen.

This separation keeps API access, state management, reusable UI, storage, and screen presentation in distinct parts of the application.

---

## 🔌 API Integration

The application uses the EscuelaJS Fake Store API with the base URL `https://api.escuelajs.co/api/v1/`.

The implemented API operations include fetching products and categories, fetching products from a selected category, searching products by title, registering a user, and logging in. API requests are handled through Dio and grouped into repository classes rather than being placed directly in the screen widgets.

No API key is configured in the supplied source code.

---

## 💾 Data Persistence

The cart repository saves cart items as JSON in `SharedPreferences`, including each item's ID, title, price, image URL, and quantity. This allows the cart to be restored locally without fetching the cart contents from a remote cart endpoint.

After a successful login, access and refresh tokens are saved through `flutter_secure_storage`. The product catalog and categories are retrieved from the external API.

---

## 💡 Learning Outcomes

This project provided practice with:

- Building multi-screen Flutter interfaces.
- Connecting Flutter applications to a REST API using Dio.
- Structuring repositories and models for API responses.
- Managing authentication, categories, products, and cart state with Cubit/BLoC.
- Registering dependencies with GetIt.
- Managing routes with GoRouter.
- Saving structured cart data locally and storing authentication tokens securely.
- Reusing shared styling and responsive layout utilities.

---

## 🚧 Potential Future Improvements

The current implementation can be extended with:

- A complete checkout flow and payment integration.
- Dynamic subtotal, tax, shipping, and total calculations based on cart contents.
- Full address creation, editing, and deletion instead of sample address entries.
- Functional order history and account-details pages.
- More detailed loading, empty, and API error states.
- Unit and widget tests for repositories, Cubits, and key screens.

These are potential enhancements; they are not represented as completed functionality in the current version.

---

## 👨‍💻 Developer

**Kirolos Emad**

- GitHub Profile: [@kero12-eg](https://github.com/kero12-eg)
- Repository: [E-Commerce App](https://github.com/kero12-eg/e_commerce_app)

**Category:** Mobile Application Development  
**Tech Stack:** Flutter · Dart · REST API · Dio · Cubit/BLoC · GoRouter · SharedPreferences

---

## 📄 License

This project was developed for learning and portfolio purposes. No separate open-source license is specified in this project description.
