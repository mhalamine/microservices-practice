FROM node:14

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "dev"]