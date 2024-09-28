# Orange Frontend

## Guidelines:

Typical structure for a multi-page web app, using common conventions for React (client-side) and Express (server-side), but the general principles apply to other frameworks as well. The naming convention will follow standard practices for scalability, readability, and maintainability.

### 1. **Root Structure (Frontend + Backend)**
```
/project-root
|-- /client                # Frontend code
|   |-- /public            # Static files like images, favicon, etc.
|   |-- /src               # Source code for the client app
|       |-- /assets        # Assets like CSS, fonts, images
|       |-- /components    # Reusable components
|       |-- /pages         # Pages (route handlers)
|       |-- /hooks         # Custom React hooks
|       |-- /utils         # Utility functions
|       |-- /services      # API service functions
|       |-- /context       # Context providers (global state)
|       |-- /styles        # Global styles (CSS/Sass)
|       |-- App.js         # Main app component
|       |-- index.js       # Entry point for React app
|-- /server                # Backend code
|   |-- /controllers       # Route handlers and business logic
|   |-- /models            # Database models (e.g., MongoDB, Sequelize)
|   |-- /routes            # Express routes
|   |-- /services          # Backend services (e.g., API calls, utilities)
|   |-- /middlewares       # Middleware functions (auth, logging, etc.)
|   |-- /config            # Environment and configuration files
|   |-- /tests             # Unit and integration tests
|   |-- server.js          # Main server entry point
|-- /scripts               # Automation scripts (e.g., database seeding)
|-- /tests                 # E2E and unit tests
|-- .env                   # Environment variables
|-- package.json           # Project metadata and dependencies
|-- README.md              # Documentation for the project
```

### 2. **Frontend (React Example)**

#### **/components**
Components are reusable and should be small, single-purpose blocks. Naming follows the PascalCase convention.
```
/components
|-- Button.js              # Example button component
|-- Navbar.js              # Navigation bar component
|-- Footer.js              # Footer component
```

#### **/pages**
Each page represents a route in your app and can contain multiple components. Naming follows PascalCase for filenames and folders.
```
/pages
|-- HomePage.js            # Home page
|-- AboutPage.js           # About page
|-- ContactPage.js         # Contact page
```

#### **/hooks**
Custom React hooks for reusable logic across components. Use camelCase for hooks.
```
/hooks
|-- useFetch.js            # Custom hook for data fetching
|-- useAuth.js             # Custom hook for authentication
```

#### **/services**
API service functions to interact with backend endpoints. Follow camelCase.
```
/services
|-- apiService.js          # Main API service
|-- authService.js         # Authentication service
```

#### **/styles**
Global styles or shared styles for components. Use kebab-case for CSS/Sass filenames.
```
/styles
|-- main.css               # Global styles
|-- button.css             # Styles for buttons
```

#### **/utils**
Utility functions to avoid redundancy. Use camelCase for function files.
```
/utils
|-- dateFormatter.js       # Function to format dates
|-- validator.js           # Form validation functions
```

### 3. **Backend (Express Example)**

#### **/controllers**
Controller functions to handle HTTP requests and pass data between services and routes. Naming follows camelCase for functions.
```
/controllers
|-- userController.js      # Handles user-related routes
|-- postController.js      # Handles post-related routes
```

#### **/models**
Database models, usually following PascalCase for model names (e.g., Sequelize or Mongoose).
```
/models
|-- User.js                # User model
|-- Post.js                # Post model
```

#### **/routes**
Organize routes by resources. Use kebab-case for filenames and camelCase for route definitions.
```
/routes
|-- userRoutes.js          # User-related routes
|-- postRoutes.js          # Post-related routes
```

#### **/services**
Backend services that interact with external APIs or handle complex business logic.
```
/services
|-- emailService.js        # Email handling service
|-- notificationService.js # Notification handling service
```

#### **/middlewares**
Custom middleware functions, usually with camelCase names.
```
/middlewares
|-- authMiddleware.js      # Middleware for authentication
|-- loggerMiddleware.js    # Logging middleware
```

#### **/config**
Environment and configuration variables.
```
/config
|-- dbConfig.js            # Database configurations
|-- serverConfig.js        # Server configurations
```

### 4. **Naming Convention Best Practices**

- **Frontend:**
    - **Component files:** PascalCase (e.g., `Navbar.js`)
    - **Hook files:** camelCase (e.g., `useFetch.js`)
    - **Service files:** camelCase (e.g., `apiService.js`)
    - **Utility files:** camelCase (e.g., `dateFormatter.js`)
    - **CSS files:** kebab-case (e.g., `main.css`, `button.css`)

- **Backend:**
    - **Model files:** PascalCase (e.g., `User.js`)
    - **Route files:** kebab-case (e.g., `userRoutes.js`)
    - **Controller/Service/Middleware files:** camelCase (e.g., `userController.js`, `authMiddleware.js`)