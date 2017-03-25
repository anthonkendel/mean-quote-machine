#! /bin/sh
# ------------------------------------------------------------------
# [Anthon Holmqvist] Install Node.js 6.9.5
#
#
#          Script is tested on Ubuntu 16.04.
#          Script should be executed with . ./install_node.sh
#          If Node.js is not found after execution of script, bashrc needs to be reloaded with . ~/.bashrc.
#
# ------------------------------------------------------------------

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | sh
export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ]
. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install 6.9.5 # Install Node.js v6.9.5
nvm use 6.9.5
nvm alias default 6.9.5
node -v

npm install -g npm # Update to latest npm
nvm --version

apt-get autoremove && apt-get autoclean

# Added for linking node to /usr/bin/node so we can run easily run node
ln -s /root/.nvm/versions/node/v6.9.5/bin/node /usr/bin/node

# This reloads bashrc profile
. ~/.bashrc
