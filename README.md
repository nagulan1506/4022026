# Password Reset Flow

This project implements a Password Reset Flow using React, Node.js, Express, and MongoDB.

## Project Structure

- `client/`: React Frontend
- `server/`: Node.js Backend

## Prerequisites

- Node.js installed
- MongoDB installed or a MongoDB Atlas URI
- An email account (e.g., Gmail) for sending reset emails

## Setup

### Backend

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   - Create a `.env` file in the `server` directory (already created).
   - Update the following variables with your credentials:
     ```
     DB_URI=your_mongodb_connection_string
     PORT=8080
     USER=your_email_address
     PASS=your_email_app_password
     BASE_URL=http://localhost:5173
     HOST=smtp.gmail.com
     SERVICE=gmail
     ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Frontend (Netlify)

1. Push the `client` folder (or root if configured) to GitHub.
2. Connect your repo to Netlify.
3. Set build command: `npm run build`
4. Set publish directory: `dist` (for Vite)
5. Add `_redirects` file in `public/` folder with `/* /index.html 200` to handle client-side routing.

### Backend (Render)

1. Push the `server` folder (or root) to GitHub.
2. Create a new Web Service on Render.
3. Connect your repo.
4. Set Root Directory to `server` (if monorepo).
5. Set Build Command: `npm install`
6. Set Start Command: `node index.js`
7. Add Environment Variables in Render dashboard.
