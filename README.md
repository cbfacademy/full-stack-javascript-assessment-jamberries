# Full Stack JavaScript Assessment 
## The Black Movie Database

A web application that contains a database of black actors and the films they star in. Node.js implementation using MongoDB via Mongoose. You can browse through the actors, browse through films and filter by genre. You are also able to add actors to the database. By adding actor, a query is run to add all films they have acting credits on into the database. 

The frontend is hosted at [Netlify](https://fantastic-valkyrie-3a694d.netlify.app/).

The backend is hosted at [Render](https://jamberries-test-api.onrender.com)

The dasebase is accessible through mongoDb. 

## Table of Contents
- [Install](#install)
- [Usage] (#usage)
- [API] (#api)
- [Licence](#license)

## Install

### Prerequisites
The following are required for this project:

- Git
- Node.js (with NPM)
- TMDB Api Key

### Installation
git clone repo
cd full-stack-application-jamberries
```.backend npm install```

```.frontend npm install```

### Database Configuration
- Create a MongoDb database. Instructions how to do so here{LINK]}
- Take note of the password and the connection string, 

-connection string

## Running/ Development

- ```npm start frontend```
  - This should open a browser to [http://localhost:3000](http://localhost3000)
- ```npm start backend```

## App Configuration

### Backend Environment Variables
Add the to your .env file in your backend package and put ```require("dotenv").config()```. Retrieve the variables using ```process.env.ENVIRONMENTVARIABLE```, where ENVIRONMENTVARIABLE is your variable. Node will set the variables on ```npm start backend```
- **MONGO_URI**
  - ``mongodb+srv://admin:<PASSWORD>@cluster0.h5ci1pg.mongodb.net/<PROJECT>?retryWrites=true&w=majority``
  
  where ``PASSWORD`` is the database password and ```PROJECT``` is the name of the database.

- **PORT**
  - The port which your express server is being hosted. Typically  PORT 8000.

- **TMDB_KEY** 
  - The Movie Database api key unique to all users
- **TMDB_TOKEN**
  The Movie Database bearer token
- **TMDB_MOVIE_URL** 
  - The url to retrieve movie data
  - https://api.themoviedb.org/3/movie/
- **TMDB_ACTOR_CREDITS_URL** 
  - The url to retrieve actor details
    -https://api.themoviedb.org/3/person/
- **TMDB_GENRE_URL** 
  - The url to retrieve the film genres
  - https://api.themoviedb.org/3/genre/movie/list


### Frontend Environment Variables
Add the to your .env file in your frontend package. Retrieve the variables using ```process.env.REACT_APP_ENVIRONMENTVARIABLE```, where ENVIRONMENTVARIABLE is your variable. Ensure that the variable starts with REACT_APP. React will set the variables on ```npm start frontend```

- **REACT_APP_API_URL** 
  - The url which the server is running on. In development will typically be http://localhost:3000 however in production will be the url of where the backend server is hosted 
- **REACT_APP_TMDB_KEY** 
  - The Movie Database api key unique to all users
- **REACT_APP_TMDB_TOKEN**
  The Movie Database bearer token
- **REACT_APP_TMDB_MOVIE_URL** 
  - The url to retrieve movie data
  - https://api.themoviedb.org/3/movie/
- **REACT_APP_TMDB_ACTOR_URL** 
  - The url to retrieve actor details
    -https://api.themoviedb.org/3/person/
- **REACT_APP_TMDB_SEARCH_URL** 
  - The url to use TMDB api search function
  - https://api.themoviedb.org/3/search/person

## Deployment
The database is hosted on [MongoDB](https://www.mongodb.com/). This was chosen as it has flexibiilty with document fields. I decided to host the backend server and the frontend app separately 1. in order to use the backend server url as an environment variable and 2. it was my first time deploying an application and wanted to take it step by step. 

### Backend
I used [Render](https://dashboard.render.com/) to host the backend as they have a free service. It also auto-deploys for every push to my repository or change to my app. 

- The root directory is set as ```packages/backend```
- The build command is ```npm install```
- The start command is ```npm start```
- I also set my environment variables for the app to use

### Frontend
I used [Netlify](https://app.netlify.com/teams/jamberries) for the frontend, which also has a free service. It also auto-deploys for every push to my repository or change to my app. 

- The base directory is set as ```packages/frontend```
- The build command is ```CI= nppm run buil```
- The publigh directory is ```packages/frontend/build```
- I also set my environment variables for the app to use and set the deployed Render url for my server.

Netlify required an additional environmental variable ```CI = FALSE``` as it treats warnings as errors, which was breaking my app on first few deploments. Netlify also required a file to be added to the root of the frontend folder ```netlify.toml```.
The contents of the file should be as such:

`[[redirects]]
  from = "/*"
  to = "/"
  status = 200`

## Authors
- **Jasmine Beresford** - Creator