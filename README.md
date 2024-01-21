# Full Stack JavaScript Assessment 
## The Black Movie Database

A web application that contains a database of black actors and the films they star in. Node.js implementation using MongoDB via Mongoose.

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

