#!/bin/bash

# Check if no arguments are provided.
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 0
fi

# Loop over the first three arguments only.
count=0
for arg in "$@"; do
  echo "$arg"
  count=$((count + 1))

  # Stop after printing three arguments.
  if [ $count -ge 3 ]; then
    break
  fi
done
