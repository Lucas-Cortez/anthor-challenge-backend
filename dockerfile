FROM node:16.17-alpine

ARG DB_USER=root
ARG DB_USER_PASSWORD=12345
ARG DB_HOST=db_challenge
ARG DB_DEFAULT=anthor_challenge
ARG PORT=8080

ENV DATABASE_URL=mysql://${DB_USER}:${DB_USER_PASSWORD}@${DB_HOST}:3306/${DB_DEFAULT}

ENV PORT=${PORT}

WORKDIR /backend_app

COPY . .

RUN yarn
RUN yarn prisma generate
# RUN yarn prisma db push
RUN yarn build

EXPOSE ${PORT}

ENTRYPOINT yarn start 
# CMD yarn start