# frontend/Dockerfile
FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm ci --silent

RUN npm run build --silent

RUN rm -rf /app/src /app/public

CMD ["npm", "run", "preview"]