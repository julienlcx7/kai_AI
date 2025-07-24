# Build Stage
FROM node:22 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

# Production Stage
FROM --platform=linux/amd64 node:22-alpine

COPY --from=build /app /app

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]
