Node.js + MongoDB Atlas user form project:

# 🚀 Node.js + MongoDB Atlas User Form App

A beginner-friendly Node.js application that connects a simple HTML form to a MongoDB Atlas database. Users can submit data using the form, and the backend stores it securely in the cloud.
![image](https://github.com/user-attachments/assets/8eceea49-b669-42bc-9591-3d82991b16b1)


## 🌐 Live Demo

> Coming Soon (You can deploy it later using **Render**, **Railway**, or **Vercel**)

---

## 📂 Project Structure

```

DockerAPP/
│
├── public/
│   └── index.html         # HTML form for user input
├── server.js              # Express.js server with MongoDB connection
├── package.json

````

---

## ⚙️ Tech Stack

- **Frontend:** HTML5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (cloud-based NoSQL database)
- **Tools:** VSCode, Postman/cURL for testing

---

## 📥 Features

- 📤 User can submit a form with email, username, and password.
- 📬 Data is saved to a cloud-hosted MongoDB Atlas database.
- 🔍 You can retrieve all users using `/` route (GET).
- 🧪 Simple API for learning CRUD basics.

---

## 📦 Installation & Run

### 1. Clone this repo

```bash
git clone https://github.com/your-username/nodejs-mongodb-form.git
cd nodejs-mongodb-form
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add your MongoDB URI

Open `server.js` and replace the following:

```js
const MONGO_URL = "yr db url";


### 4. Run the server

```bash
node server.js
```

Visit: `http://localhost:5050`


## 📡 API Routes

| Route      | Method | Description                  |
| ---------- | ------ | ---------------------------- |
| `/`        | GET    | Fetch all users from MongoDB |
| `/addUser` | POST   | Submit form data to MongoDB  |

---

## 🧑‍💻 Author

Made with ❤️ by [Urvashi Agrawal](https://github.com/urvashi-agrawal-dev)


## 🙌 Acknowledgments

* [MongoDB Atlas](https://www.mongodb.com/atlas)
* [Node.js Docs](https://nodejs.org)
* [Express Docs](https://expressjs.com/)

## 📌 License

This project is open-source and available under the MIT License.


### ✅ Next Step:
1. Replace `your-username` with your GitHub username.
2. Add this file to your project root and save as `README.md`.
3. Stage, commit, and push to GitHub.
