#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
while true; do
  /usr/bin/python3 -m http.server 8080 --directory "$DIR"
  sleep 1
done
