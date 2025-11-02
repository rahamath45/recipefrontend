## 🍳 Recipe App 👩‍🍳💻

A full-stack Recipe Management Platform built with React (Vite) + TailwindCSS on the frontend and Node.js + Express + MongoDB on the backend.
Users can create, view, edit, and delete recipes, with authentication, image upload, and RESTful API integration.

## ⚠️ Important

📩 If you click “Forgot Password”, the reset password link will be sent to your email spam box — please check your spam folder.
This happens because the email service (SendGrid) may take time to verify your domain after deployment.
Also, all emails related to recipe creation, updates, or deletions might temporarily appear in your spam folder — please check there.

### 🚀 Features
### 👤 Authentication

Register, Login, Logout using JWT

Protected routes for authorized users only

### 🍲 Recipes

View all recipes with images and descriptions

Add a new recipe with title, ingredients, and steps

Edit or delete your recipes

Fully responsive layout built with Tailwind CSS

### 🖼️ Image Upload

Upload recipe images using Multer

Images stored securely on the backend

### 🔎 Search & Filter

Search recipes by name or ingredients

Filter by category (e.g., vegetarian, dessert, breakfast, etc.)

🛠️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB (Mongoose)

Multer (for file uploads)

JWT (for authentication)

#### ⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/recipe-app.git

2️⃣ Install Dependencies

Frontend

cd client
npm install


Backend

cd ../server
npm install

3️⃣ Add Environment Variables

Create a .env file inside the server folder and add:

MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key
PORT = 5000

4️⃣ Run the Application

Backend

npm start


Frontend

npm run dev


Now open 👉 http://localhost:5173
 in your browser.

### 🧩 API Routes
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
POST	/api/auth/forgot-password	Send reset password link
PUT	/api/auth/reset-password	Reset user password
### 🍳 Recipes
Method	Endpoint	Description
GET	/api/recipes	Get all recipes
POST	/api/recipes	Add a new recipe
PUT	/api/recipes/:id	Update recipe
DELETE	/api/recipes/:id	Delete recipe
🧭 Navigation Flow

🏠 When you open the app, you’ll land on the Home Page.
🍴 Click “Recipes” in the navbar to see all available recipes.
➕ Click “Add Recipe” to upload a new one.
✏️ Click “Edit” or “Delete” to modify or remove recipes.
🔐 Use Login / Register buttons to create or access your account.
📩 After performing any action (like adding or deleting), you’ll receive a confirmation email (check your spam folder if not visible).



