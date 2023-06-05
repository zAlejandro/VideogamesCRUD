# Stage 1: Build the Angular app
FROM node:14 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the final image
FROM mcr.microsoft.com/windows/servercore:ltsc2019
WORKDIR /app
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 80
CMD ["npm", "start"]
