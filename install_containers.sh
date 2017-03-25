#! /bin/sh

# Mongo
docker run -p 27017:27017 --name mean-mongo -d mongo 

# Express
docker build -t mean-rest .
docker run -d --name mean-express -p 3000:3000 mean-rest



