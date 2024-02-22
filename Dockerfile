# Use a specific version of the node image from Docker Hub, based on Alpine Linux for a smaller image size
FROM node:20.11.0-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy both package.json AND package-lock.json files
COPY package*.json ./

# Install dependencies in the container
# The --omit=dev flag will not install devDependencies from package.json
RUN npm ci --omit=dev

COPY ./public ./public

# Copy the application source files from the local "src" directory to the "src" directory in the container
COPY ./src ./src

# Start the application using the npm start script defined in package.json
CMD ["npm", "start"]
