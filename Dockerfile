# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package.json package-lock.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of your project files into the container
COPY . .

# Expose the Vite default port
EXPOSE 3000

# Ensure Vite listens on all network interfaces (0.0.0.0)
ENV HOST 0.0.0.0

# Command to run the app in development mode
CMD ["npm", "run", "dev"]
