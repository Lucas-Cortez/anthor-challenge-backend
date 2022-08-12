FROM node:16.16.0

ARG DATABASE_URL=mysql://root:12345@localhost:3306/anthor_challenge

ENV DATABASE_URL=$DATABASE_URL

WORKDIR /backend_app

COPY . .

RUN npm i
RUN npx prisma generate
RUN npx prisma db push
RUN npx prisma db seed
RUN npm run build

ENTRYPOINT npm start


