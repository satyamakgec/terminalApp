#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

cleanup() {
    rm -rf terminalApp
}

build() {
    git config --global user.name "${GH_NAME}"
    git config --global user.email "${GH_EMAIL}"
    echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
    cd website 
    npm install
    GIT_USER="${GH_NAME}" npm run publish-gh-pages
    echo "Build is complete successfully...."
}

timestamp() {
    date +"%T"
}

move_index_html() {
    # get back to the root directory
    echo "Enter gh-pages branch....."
    cd
    git clone https://${GH_NAME}:${GH_TOKEN}@github.com/satyamakgec/terminalApp.git
    cd terminalApp
    git checkout gh-pages
    curl -o index.html https://raw.githubusercontent.com/satyamakgec/terminalApp/master/website/pages/en/index.html
}

git_push() {
    git add . 
    git commit -m "add index ${timestamp}"
    git push origin gh-pages
}

# status_check() {
#     curl -get https://satyamakgec.github.io/terminalApp/
# }

build
move_index_html
git_push
cleanup
