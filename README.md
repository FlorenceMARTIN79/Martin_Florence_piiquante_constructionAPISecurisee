# Piiquante 
### A web application to rate pepper sauces

This project was generated with node.js (see <https://nodejs.org/en> for setup if not done yet) version v18.15.0.

It is intended to be runned on the 3000 port by default.

The project is designed to run with a noSQL database on MongoDB (https://www.mongodb.com/). If you do no have a MongoDB account, please create it now. Then, create a DataBase and recover the DataBase identifier and password to include them in the .env file (see below).

This project is intended to be run with the front-end project you can clone here : https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6. Please follow the instructions in the README file of this project to run it properly.


## Requirements for the set up of the project : 

* You need to have node.js installed on the computer executing the code. If you have not already installed it, please do it from this page : `https://nodejs.org/en`

* If it is not already existing, the creation of an "image" folder in the back is needed when installing the project : it will contain all the images loaded by the users. If you have loaded it when cloning the project, please delete any file from it as they do not concern your DataBase.

* If it is not already existing, the creation of a ".env" file in the back is needed to run the project. It must contain the mongoDB identifiers of your database in the format provided by MongoDB when creating the DataBase ('mongodb+srv://<YOUR_IDENTIFIER_DB>:<YOUR_PASSWORD_DB>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority'). You have to name your environment variable "MONGO_URI" to allow the access to your DataBase.
If you have loaded it when cloning the project, please replace the identifier and password in the command line by your DataBase identifier and password.

* Inside your back folder, run `npm install` to install locally all the dependencies needed for the proper running of the project.

* Run `node server` to start the server on the port 3000 by default.

* Methods of request allowed : 
POST - GET - PUT - DELETE

## Help :

You can find help by running `npm help`.


