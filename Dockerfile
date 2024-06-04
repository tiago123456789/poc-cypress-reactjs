# Specifies the base image from Docker Hub. We're using the official Node.js image at version 16.15.
FROM node:18-alpine

# Sets the working directory in the container to /app.
WORKDIR /app

# Copies package.json and yarn.lock from your current directory (host machine) to the present location (inside the container) to manage dependencies.
COPY package.json package-lock.json ./

# Installs all the dependencies as specified by the lock file.
RUN npm install

# Copies the rest of your application code from your current directory (host machine) to the present location inside the container.
COPY . .

# Specifies the command to start the React app using 'yarn start', which starts a development server with features such as live reloading, suitable for the testing environment.
CMD ["npm", "start"]