curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

npm install -g @vue/cli

cd teacher-profile-website

npm install

npm run build

npm run serve
