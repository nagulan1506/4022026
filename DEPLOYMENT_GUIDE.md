# Deployment Configuration Guide

To make your deployed application work correctly, you need to configure the **Environment Variables** on both Netlify (Frontend) and Render (Backend).

## 1. MongoDB Atlas Configuration (CRITICAL)

**If you see "Internal Server Error" (500), it is likely because MongoDB is blocking the connection.**

1.  Log in to **MongoDB Atlas**.
2.  Go to **Network Access** (in the left sidebar, under Security).
3.  Click **+ Add IP Address**.
4.  Select **Allow Access from Anywhere** (0.0.0.0/0).
5.  Click **Confirm**.
    *   *Reason: Render servers have dynamic IP addresses, so you must allow all IPs to connect.*

## 2. Netlify (Frontend) Configuration

Your React frontend needs to know where your Backend API is located.

1.  Go to your **Netlify Dashboard**.
2.  Select your site (`fascinating-gecko...`).
3.  Go to **Site configuration** > **Environment variables**.
4.  Click **Add a variable**.
5.  Add the following key and value:

    *   **Key**: `VITE_API_URL`
    *   **Value**: `https://password-rest.onrender.com`
        *(Note: Replace this with your **actual** Render Backend URL. **DO NOT use localhost**)*

6.  **Redeploy your site**:
    *   Go to the **Deploys** tab.
    *   Click **Trigger deploy** > **Clear cache and deploy site** to ensure the new variable is picked up.

## 3. Render (Backend) Configuration

Your Backend needs to know where the Frontend is to send the correct Password Reset links via email.

1.  Go to your **Render Dashboard**.
2.  Select your Web Service.
3.  Go to **Environment**.
4.  Add/Update the following variables:

    *   **Key**: `BASE_URL`
    *   **Value**: `https://fascinating-gecko-e8c9b7.netlify.app`
    
    *   **Key**: `DB_URI`
    *   **Value**: (Your MongoDB Connection String)

    *   **Key**: `PORT`
    *   **Value**: `10000`

5.  **Save Changes**.

## 4. Troubleshooting

*   **Error: "POST http://localhost:10000... 500"**:
    *   This means your Netlify site is still trying to talk to your *local* computer.
    *   **Fix**: Ensure `VITE_API_URL` is set in Netlify to your Render URL, and **Trigger a new deploy**.
