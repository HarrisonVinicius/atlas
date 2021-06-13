# Alpha gitHub Search 

>>>> ATENTION <<<< 
this project is not finished yet!

given the degree of development of the project, some bugs still exist and some features were not implemented.

features to be done: 
* Use SessionStorage to save the app data 
* Conect store to sessionStorage 
* Redirect the user to the perfil page when the button "Buscar" is clicked 
* filter the search input data before the request 
* a few fixes in media breakPoints 
* a few fixes in CSS/SASS
* a few fixes in docker config
* code documentation 
* unit testing ( Jest )
and few more features... 

this application did not use ui/ux frameworks (vuetify, buefy, bootstrap...) 

this is a pwa developed in NuxtJs

important: 
**it is possible to run this application through a docker container. however the application is optimized to be run through yarn

*Make sure you can run docker 
```bash
$ docker-compose up --build -d
```

## Build Setup
make sure you have Node 12 version installed to run the app

create a .env file at the root and add the code below: 
NODE_ENV=staging
BASE_URL=https://api.github.com

and follow the steps below:
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
