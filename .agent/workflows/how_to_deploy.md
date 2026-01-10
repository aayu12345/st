---
description: How to deploy the Next.js application to Vercel
---

# Deploying to Vercel (Recommended for Next.js)

Vercel is the easiest place to deploy your Next.js app. It supports your API routes (for the email form) automatically.

## Prerequisites

1.  **GitHub Account**: You need a [GitHub account](https://github.com/).
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup) using your GitHub account.

## Step 1: Push your code to GitHub

1.  Initialize a git repository if you haven't (you likely have).
    ```bash
    git init
    git add .
    git commit -m "Ready for deployment"
    ```
2.  Create a **new repository** on GitHub (do not initialize with README/license).
3.  Link your local folder to GitHub and push:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

## Step 2: Deploy on Vercel

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import the GitHub repository you just created.
4.  **Configure Project**:
    *   Vercel will detect `Next.js` automatically.
    *   **IMPORTANT**: Open the **"Environment Variables"** section.
5.  **Add Environment Variables**:
    *   You MUST add the same keys you put in your `.env.local` file.
    *   **Key**: `GMAIL_USER` -> **Value**: `kayasthayush123@gmail.com`
    *   **Key**: `GMAIL_APP_PASSWORD` -> **Value**: `your_16_char_app_password`
6.  Click **"Deploy"**.

## Step 3: Verification

1.  Wait for the build to complete (approx 1-2 mins).
2.  Click the screenshot of your site to visit the live URL (e.g., `str-brains.vercel.app`).
3.  **Test the Contact Form**: Go to the "Partner With Us" section and send a test email. It should arrive in your inbox just like on localhost.

## Troubleshooting

-   **Email Fails?** Check your Vercel Environment Variables. You might have pasted the password with spaces or quotes. Use the raw value.
-   **Build Fails?** Check the "Logs" tab in Vercel. Common issues are TypeScript errors that didn't stop `npm run dev` but strictly fail the build. Run `npm run build` locally to see if it passes.
