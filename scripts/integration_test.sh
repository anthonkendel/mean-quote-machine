#! /bin/bash

IP="localhost"
PORT=3000

#which curl 2>&1 1>/dev/null || echo "Curl not installed"; exit 1;


q1=$(curl -s $IP:$PORT/get_existing_quote)

if [ "$q1" != "No quotes available" ];
then
    echo "Failed: Did not get expected message (No quotes available)"
    exit 1;
fi

q2=$(curl -s $IP:$PORT/get_random_quote | jq -r '.quote.author')
test -n "$q2" || echo "Failed: Could not get random quote"; exit 1;

q3=$(curl -s $IP:$PORT/get_existing_quote | jq -r '.quote.author')
test -n "$q3" || echo "Failed: Could not get existing quote after get_random_quoute should have inputted one"; exit 1;





