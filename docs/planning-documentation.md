# Planning Documentation

### Ideas

 - **Recommendation app**: Users can submit what anime they have watched and are recommended new similar anime. Can also leave comments on anime. 
 - **Gallery/inventory app**: Users upload image? title? of sewing patterns and/or fabric they own. Issue with patterns would be getting the image of the pattern w/o uploading pattern entirely. 
 - **Gallery/Review app**: Users upload images of finished sewing projects, and images of the fabric they used, fabric type. Can post reviews of the pattern/ fabric.  They type the pattern name but can link it too. 

 ### Selected Idea
 Moving forward with the anime recommendation app based on genre. Requires use of API, which would be beneficial to work with. What separates this app from other anime recommendation/documenting apps is that there will be graph showing analytics e.g. genres etc

 ---
 
 ### Background Research
 Steps I need to take
 1. **Dataset** 
    -   Locate an appropriate dataset that has user ratings and anime list [Found here](https://www.kaggle.com/datasets/CooperUnion/anime-recommendations-database)
    -   Import Dataset to MongoDB
    -   Remove unnecessary items i.e. hentai (Inappropriate)
2. Set Up environment
    - Get familiar with brain.js , the neural network plan to use in this project
    - Connect brain.js and db schema
 
---

 ### User Stories
 - As a user, I want to be able to view a home page
 - As a user, I want to be able to create a new account
 - As a user, I want to be able to modify/delete my account
 - As a user, I want to be able to add anime to my completed list
 - As a user, I want to be able to add anime to my watching list
 - As a user, I want to be able to remove anime from my list
 - As a user, I want to be able to update an item from "watching" to "watched"


### Wireframes
Pages
- **Homepage**
- **Create account page**
- **Profile page**
- **List of anime page**
- **Selected Anime page**
- **Recommendation Page**
