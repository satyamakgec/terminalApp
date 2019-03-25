#!/bin/bash
cd /app/api
yarn install
yarn start
cd /app/website
yarn install
yarn start
tail -f /dev/null