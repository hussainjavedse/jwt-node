**A Basic Implementation of Node JS CRUD with public & private routes with JWT authentication**

**Requirements :**

Node Js  
mongo db with mongoose
JWT (Json Web Token)

**Note (Installation is linux based)**

**Installation :**

npm init -y -- to get packages.json

npm i bcrypt body-parser express jsonwebtoken mongoose mongose morgan

npm i nodemon --save-dev   (for development purpose only)

**For mongo Installation**

mkdir mongodb

cd mongodb/

curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.7.tgz

tar xvf mongodb-linux-x86_64-3.4.7.tgz

mv mongodb-linux-x86_64-3.4.7 mongodb

cd mongodb

echo $PATH

**Then make data directory at Home directory**

mkdir data

cd data

mkdir db

cd db

**Open terminal Run the below command and mongo db will start running**

mongod --port 27017 --dbpath 

**Install mongodb compass and use filled in with connection details**


**At the End Just run**

npm start

**Postman Collection is also added in the public folder in the project you just need to use your access token**