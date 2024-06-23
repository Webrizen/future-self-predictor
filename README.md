# React + Vite App Deployment on Hostinger

Welcome to the repository for deploying a React + Vite application on Hostinger! This README provides an overview of the project structure and steps to deploy your application to Hostinger's hosting environment.

## Overview

This project demonstrates how to deploy a React application built with Vite, a fast frontend tooling framework. The application includes features like predicting the future based on user input and sharing predictions via social media.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool that aims for fast refreshes and optimized production builds.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide Icons**: SVG icon library for React components.

## Deployment Steps

To deploy this React + Vite application on Hostinger, follow these steps:

### Step 1: Build Your React Application

First, build your React application using Vite. Run the following command:

```bash
npm run build
```

This command generates a production-ready build of your application in the `dist` directory.

### Step 2: Prepare for Deployment

Ensure your `package.json` includes necessary scripts for building and serving your application. Here’s an example:

```json
"scripts": {
  "start": "vite preview",
  "build": "vite build"
}
```

### Step 3: Deploy to Hostinger

1. **Upload Files**: Upload the contents of the `dist` directory to your Hostinger server using FTP, SFTP, or Hostinger's file manager.

2. **Configure Server**: Ensure your Hostinger server is properly configured to serve static files and supports Node.js if you are using server-side rendering or APIs.

3. **Set Environment Variables**: If your application requires environment variables (e.g., API keys, configuration settings), set them in Hostinger's dashboard or via `.env` files.

### Step 4: Access Your Application

Once deployed, access your React application on Hostinger using your domain or server IP address.

## Credits

- **webrizen**: Web development agency that created this application. [Visit our website](https://webrizen.vercel.app) for more information.

## License

This project is licensed under the [MIT License](LICENSE).