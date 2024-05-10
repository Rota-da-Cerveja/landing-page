#!/bin/bash

for filename in *_gray_5:3.png
do
  name=$(echo $filename | cut -d'_' -f 1)
  echo $name
done
