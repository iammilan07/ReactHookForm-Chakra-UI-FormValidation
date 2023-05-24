# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the app
CMD ["npx", "serve", "-s", "build"]

