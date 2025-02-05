#!/bin/bash

# Count regular files and directories in the current directory,
# excluding the current directory (".").
count=$(find . -maxdepth 1 \( -type f -o -type d \) | wc -l)

# Substract 1 to exclude the current directory (".").
echo $((count - 1))


ls -1 | wc -l