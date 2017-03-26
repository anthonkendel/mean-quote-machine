FROM node:7.7

RUN apt-get update

RUN apt-get install -y nodejs npm git vim build-essential libssl-dev curl

WORKDIR /home/

COPY . /home/

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]
