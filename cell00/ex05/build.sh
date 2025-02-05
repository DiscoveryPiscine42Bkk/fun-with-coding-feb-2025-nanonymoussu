#!/bin/bash

# Check if any arguments were provided
if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

# Iterate over all arguments and create directories with a prefix "ex"
for arg in "$@"; do
  mkdir -p "ex$arg"
done
