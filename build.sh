export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
git checkout HEAD .
git pull && npm install && npm run build