FROM node:16.16.0

ARG DB_USER=root
ARG DB_USER_PASSWORD=12345
ARG DB_HOST=challenge_db
ARG DB_DEFAULT=anthor_challenge

# ARG DATABASE_URL=mysql://root:12345@challenge_db:3306/anthor_challenge

ENV DATABASE_URL=mysql://${DB_USER}:${DB_USER_PASSWORD}@${DB_HOST}:3306/${DB_DEFAULT}

WORKDIR /backend_app

COPY . .

RUN npm i
RUN npx prisma generate
# RUN npx prisma db push
# RUN npx prisma db seed
RUN npm run build

EXPOSE 8080

# ENTRYPOINT npx prisma db push && npx prisma db seed && npm start 
ENTRYPOINT npm start 





