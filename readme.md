Creating a simple REST API and website in 4 hours.

Tools:
- MongoDB with Mongoose
- Node.JS
- AngularJS
- Bootstrap

This first commit is some boiler plate I cobbled together from various previous projects I've developed over the last couple of years. Additionally there is some setup in order to properly run on Heroku.

Setting up the Datamodel, we have a bunch of fields we can use. I'll break these up into three subsections, which will
define the routes/structure of the app along with it's datamodel.

- Demographics
Name
Date of Birth
Nationality
Location
Gender

- Athletics
Association
Team
Sports
About

- About (Ancillary Details about the person)
Interests
Charities
SocialMediaHandles
Pets
PetsDescription
DrinksAlcohol
Married

We can setup a few services (I'm a fan of factories for this, but I'm self taught in Angular so I can be convinced otherwise!) for handling each 'chunk' of the full data model.

- UserService - Keeps track of user information, I'm assuming this is populated via some authentication I won't be implementing here.

Data Services - These will each have a 'get model' function we can use towards the end when building up the final object.

- DemographicsService - Storing Demographics Information
- AthleticsService - Storing Athletics Fields
- AboutService - Our Ancillary Data

- ProfileService - This service will handling submitting the final information to the server.

Ancillary Services
- OptionsService - We have a number of fields with multiple options, so we'll put them all in here for storage.

This structure has a lot of advantages, namely we only expose or 'inject' the service to the page that needs it, and it persists since these are singletons, allowing us to go back and forth across the page (next/prev) without losing anything. We should also be able to reuse a ton of the templates on our final summary page.

I'm also thinking these partitions might be nice to connect to microservices rather than the monolith I'm currently working on.
