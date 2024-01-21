# Planning Documentation

### Ideas

 - **Recommendation app**: Users can submit what anime they have watched and are recommended new similar anime. Can also leave comments on anime. 
 - **Search Engine**: Users can search through various anime and can save the anime they have watched. 
  - **Search Engine**: Users can search through various films, and can catorgorise certain films as starring POC. Similar to Bechdel Test Movie List 
 - **Gallery/inventory app**: Users upload image? title? of sewing patterns and/or fabric they own. Issue with patterns would be getting the image of the pattern w/o uploading pattern entirely. 
 - **Gallery/Review app**: Users upload images of finished sewing projects, and images of the fabric they used, fabric type. Can post reviews of the pattern/ fabric.  They type the pattern name but can link it too. 

 ### Selected Idea
 Moving forward with the film search engine. The database will contain a list of actors and their race (if they are Black). The app will then check whether actors present in the movie and 

 Version 1 of the app will use a basic database of items. Version 2 of the app will have items filtered from a list of actors cross checked with the api list. (using their movie credits)

 ---
 
### Background Research
Steps I need to take
1. **Design**
    - Wireframes how the app will look like
    - How the database collections will look like
2.  **Dataset** 
    -   Locate an appropriate dataset that has movie list [Found here at The Movie DB](hhttps://developer.themoviedb.org/reference/movie-details)
    - Database collection for the inputted movies
3. Build the back end
4. Build the front end
5. Implement CI/CD
6. Deploy
7. Get peer reviews

---

 ### User Stories
 - As a user, I want to be able to view a home page
 - As a user, I want to be able to search through the database by typing in the name

- As a user, I want to be able to add Black actors to the database


### Wireframes
Pages
- **Homepage**
- **Selected Movie page**
- **A-Z List of movies page**
- **Selected genre page**

### Database
**Actor collection** 
- Actor_id from tmdb
- id
- actor name
- gender 

**Film Collection**
- movie_id from tmdb
- id
- genres [array]
- <s>original language</s>
- <s>original title</s>
- /production country
- title
- overview
- poster path
- backdrop_path
- release date
- /runtime
- /directors

TO POPULATE MY DATABASE
I need to create a list of black actors, get their id from tmdb
then 
list of movies with the actor id
Get several actor ids, create query that searches for all movies where that actor id is present
For each actor in the list, get the movie details

Two ways of creating a collection :

**Embedded cast array**
- Pros: 
    - single query to retrieve data
    - single operation to update/delete data
- Cons:
    - can become unbounded
    - data duplication

**Referenced cast array**
- Pros:
    - no duplication
    - smaller documents
- Cons: 
    - multiple collections needed 
    - need to join from multiple documents


Poster path
- https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${poster path}

- example 
- /skbFWkAROLO7nmP8meSLru5sCSO.jpg

Backdrop path 
- https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${backdrop_path}
 - https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/
- /k9hhSHg5GS4UgWQC6MHBOZrarji.jpg
- example 
- /j69IYCAmeFlF6dcoZZAWRUmI8On.jpg

To do Wednesday:
Create array of URLS

To do
Movie list
Pagination
Hover overview/full title
Form page to add actor? then link to seed? or create a seperate api call to add
user verification?

Read me very detailed - prod, pagination etc

accesibility

filters - at least two black actors
all films

films - characters and actors

DOC BLOCKS