FROM node:14.18.1 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

ARG API_URL="http://0.0.0.0:4001"
ENV API_URL ${API_URL}

RUN npm build

FROM nginx:latest

COPY --from=builder /app/ /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]