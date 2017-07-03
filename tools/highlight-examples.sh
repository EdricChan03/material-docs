#!/usr/bin/env bash
# Same script as https://github.com/angular/material.angular.io/blob/master/tools/highlight-examples.sh
echo "Highlighting example sources. This may take 15 - 20 seconds..."
find ./src/assets/examples -mindepth 2 -type f \( -iname "*.css" -or -iname "*.ts" -or -iname "*.html" \) -exec sh -c './tools/syntax-highlight.js {} ./src/assets/highlighted/' \;
