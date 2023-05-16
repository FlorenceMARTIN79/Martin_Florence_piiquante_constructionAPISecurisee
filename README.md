# Piiquante
### A web application to rate pepper sauces
***

This project was generated with node.js (see <https://nodejs.org/en> for setup if not done yet) version v18.15.0.

It is intended to be runned on the 3000 port by default.

It is designed to run with a noSQL database MongoDB ( <https://www.mongodb.com/> ). If you do no have a MongoDB account, please create it now. Then, create a DataBase and cluster. Then recover the DataBase identifier and password to include them in the .env file (see below).

This project is intended to be runned with the front-end project you can clone here : <https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6> . Please follow the instructions in the README file of this project to run it properly.

## Table of Contents
1.[ Set up and running](#requirements-for-the-set-up-of-the-project)

2.[ Help](#help)

3.[ Author](#author)

***


### 1 - Requirements for the set up of the project : 

* You need to have node.js installed on your computer. If you have not already installed it, please do it from this page : <https://nodejs.org/en>.

* If it is not already existing, the creation of an "image" folder in the back folder is needed when installing the project : it will contain all the images sent by the users. If you have loaded it when cloning the project, please delete any file from it as they do not concern your DataBase.

* If it is not already existing, the creation of a ".env" file in the back is needed to run the project. It must contain the mongoDB identifiers of your database in the format provided by MongoDB when creating the DataBase ('mongodb+srv://<YOUR_IDENTIFIER_DB>:<YOUR_PASSWORD_DB>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority'). You have to name your environment variable "MONGO_URI" to allow the access to your DataBase.
If you have loaded it when cloning the project, please replace the identifier and password in the command line by your own DataBase identifier and password.

* Inside your back folder, run `npm install` to install locally all the dependencies needed for the proper running of the project, among which the framework Express (see <https://expressjs.com/> ).

* Run `node server` to start the server.

* Methods of request allowed : 
POST - GET - PUT - DELETE



## 2 - Help :

You can find help by running `npm help`.



## 3 - Author : 
Florence MARTIN 79, OpenClassrooms student
Study project completed during my training as a web developer


