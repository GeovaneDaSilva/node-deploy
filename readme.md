# Simple DevOps Project CI CD Using Node JS 


##### Steps 1 - Install Node Js on Ubuntu Machine 

``` sh 
sudo apt update
sudo apt install nodejs
sudo apt install npm
nodejs -v  // To check the node JS version 
```

##### Step 2 -  Download the Publish Over SSH plugins 

``` sh
Key -- define the private Key ( you will get from .pem while when you will open as text file)
ssh Server - 
Name - define the name of the server.
HostName - Provide the IP address of your server.
UserName - Provide the user name here ex. if we are using Ubuntu ec2 instance then username is ubuntu
Click Save and Apply 
```
##### Step 3 -  Create the Free Style Node JS project .
``` sh 
Git URL - https://github.com/Abhishek08/node-js-sample.git
WebHook Connection URL - http://IPADDRESS/github-webhook/ (push)
BUILD - npm install  // to download all the dependecines 
      - npm test  // to perform test case execution 
tar czf Node.tar.gz node_modules index.js package.json public app.json     
```
##### Step 4 - Post Build Action Define below details.
``` sh 
Source file : **/*.gz 
Exec Command 
mv /var/lib/jenkins/workspace/
cd /var/lib/jenkins/workspace/node-deploy
docker rmi -f nodeimage;
docker stop nodecontainer;
docker rm nodecontainer;
docker build -t nodeimage .;
docker run -d -p 3050:3000 --name nodecontainer nodeimage;
```
##### Step 5 - Docker File in Node Js server 
``` sh 
FROM node:12.22.10

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY ./ .

EXPOSE 3050

CMD ["npm", "start"]
```

##ISSUES https://stackoverflow.com/questions/26600769/build-context-for-docker-image-very-large