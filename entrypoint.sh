#!/bin/bash
cd /app/website
yarn install
yarn start
tail -f /dev/null