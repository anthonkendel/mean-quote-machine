#! /bin/sh

# Simple script to get the environment up and running

MONGODB_PORT=27017
MONGODB_CONTAINER_NAME="mean-mongo"
MONGODB_IMAGE_NAME="mongo"

EXPRESS_PORT=3000
EXPRESS_CONTAINER_NAME="mean-express"
EXPRESS_IMAGE_NAME="mean-rest"

# Mongo
docker run -d --name $MONGODB_CONTAINER_NAME -p $MONGODB_PORT:$MONGODB_PORT $MONGODB_IMAGE_NAME

# Express
docker build -t $EXPRESS_IMAGE_NAME .
docker run -d --name $EXPRESS_CONTAINER_NAME -p $EXPRESS_PORT:$EXPRESS_PORT $EXPRESS_IMAGE_NAME



