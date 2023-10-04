FROM node:18.12.1-alpine as builder
WORKDIR '/app'
EXPOSE 4000
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
