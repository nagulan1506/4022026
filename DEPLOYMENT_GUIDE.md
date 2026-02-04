# Deployment Configuration Guide

To make your deployed application work correctly, you need to configure the **Environment Variables** on both Netlify (Frontend) and Render (Backend).

## 1. Netlify (Frontend) Configuration

Your React frontend needs to know where your Backend API is located.

1.  Go to your **Netlify Dashboard**.
2.  Select your site (`fascinating-gecko...`).
3.  Go to **Site configuration** > **Environment variables**.
4.  Click **Add a variable**.
5.  Add the following key and value:

    *   **Key**: `VITE_API_URL`
    *   **Value**: `https://password-rest.onrender.com`
        *(Note: Replace this with your **actual** Render Backend URL if it's different. Do not include a trailing slash `/`)*

6.  **Redeploy your site**:
    *   Go to the **Deploys** tab.
    *   Click **Trigger deploy** > **Clear cache and deploy site** to ensure the new variable is picked up.

## 2. Render (Backend) Configuration

Your Backend needs to know where the Frontend is to send the correct Password Reset links via email.

1.  Go to your **Render Dashboard**.
2.  Select your Web Service.
3.  Go to **Environment**.
4.  Add/Update the following variables:

    *   **Key**: `BASE_URL`
    *   **Value**: `https://fascinating-gecko-e8c9b7.netlify.app`
        *(This ensures the reset link in the email points to your Netlify app)*

    *   **Key**: `DB_URI`
    *   **Value**: (Your MongoDB Connection String)

    *   **Key**: `USER`
    *   **Value**: (Your Email)

    *   **Key**: `PASS`
    *   **Value**: (Your Email App Password)

    *   **Key**: `HOST`
    *   **Value**: `smtp.gmail.com`

    *   **Key**: `SERVICE`
    *   **Value**: `gmail`

5.  **Save Changes**. Render will usually restart the service automatically.

## 3. Troubleshooting

*   **Registration Fails**: Open the browser Console (F12) > Network tab.
    *   If you see a request to `undefined/api/auth/register`, it means `VITE_API_URL` is missing on Netlify.
    *   If you see a CORS error, check if the Backend is running.
*   **Backend Sleeping**: On the free tier, Render spins down after inactivity. The first request might take 50+ seconds.
