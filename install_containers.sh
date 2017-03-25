#! /bin/bash

# Simple script to get the environment up and running

USAGE="Usage: [start|clean|help] start [(mongodb, express, all)] clean [(mongodb, express, all)]"

MONGODB_PORT=27017
MONGODB_CONTAINER_NAME="mean-mongo"
MONGODB_IMAGE_NAME="mongo"
MONGODB_VERSION="3.4.2"

EXPRESS_PORT=3000
EXPRESS_CONTAINER_NAME="mean-express"
EXPRESS_IMAGE_NAME="mean-rest"

NGINX_PORT=8000
NGINX_CONTAINER_NAME="mean-nginx"
NGINX_IMAGE_NAME="nginx"

function run_mongodb {
    docker run -d --name $MONGODB_CONTAINER_NAME -p $MONGODB_PORT:$MONGODB_PORT $MONGODB_IMAGE_NAME:$MONGODB_VERSION
}

function run_express_rest {
    docker build -t $EXPRESS_IMAGE_NAME .
    docker run --net=host -d --name $EXPRESS_CONTAINER_NAME -p $EXPRESS_PORT:$EXPRESS_PORT $EXPRESS_IMAGE_NAME
}

function clean_express_rest {
    docker stop $EXPRESS_CONTAINER_NAME; docker rm $EXPRESS_CONTAINER_NAME
}

function clean_mongodb {
    docker stop $MONGODB_CONTAINER_NAME; docker rm $MONGODB_CONTAINER_NAME
}

case "$1" in
"start")
    case "$2" in
    "mongodb")
        run_mongodb;;
    "express")
        run_express_rest;;
    "all")
        run_mongodb
        run_express_rest;;
    esac
    ;;
"clean")
    case "$2" in
    "mongodb")
        clean_mongodb;;
    "express")
        clean_express_rest;;
    "all")
        clean_express_rest
        clean_mongodb;;
    esac
    ;;
"help")
    echo $USAGE
esac


