# Stage 1: Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Stage 2: Run Stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 4000
CMD ["npm", "start"]

