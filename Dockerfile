# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the .next/standalone directory
COPY .next/standalone ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]