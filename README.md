#Astronaut's Dashboard

An astronaut is going to the International Space Station and has requested that you build a browser based dashboard for them to use on board the ISS. They want to keep up to date with what's going on in their home city to stop them from getting too homesick. They also want to be able to write a diary to send back home...

### Photos here

This is our Week 12 Group Project, a 7-day hackathon at [CodeClan](https://codeclan.com/) where we introduced the use of APIs and MongoDB by creating a sinble-page web application with JS. 

## Project Objectives 

- To explore front-end and server-side JS technologies
- To consolidate the use of various third-party APIs
- To consolidate the use of MongoDB
- To make use of local storage 

## Installation
- To get started, you need to install MongoDB in your computer. run the following command in your terminal.
```

```
- In order to use third-party API, you need to get API keys for Flickr and New York Times API. Go to their websites and get the keys. 

- In order to use Webpack, you need to install it globally on your computer to make its Terminal commands available. Run the following command in the terminal 
```
npm install webpack -g
```

- To get all the necessary tools and libraries, go to your your project directory in the terminal and run the following command.
```
npm install
```
- In order to run the app, you need to run local server, webPack, MongoDB. Firstly, run the following command in the terminal 
```
nodemon server.js
```
-  Next, go into the client directory and run the following command 
```
webpack -w 
```
-  Next, run the following command
```
mongod
```
Then open a browser and visit localhost: 3000

## Main Functions
- User can set their home town location
- Once set their home town, user can browse various information about their home town: local times, weather, news articles, flickr public photos, top songs in their home countries. 
- User can create/delete a diary and save it to the database
- User can check the location of ISS
- User can bookmark their favorite diaries, articles and photos and keep them in their personal page. 

## Technology Used

- HTML
- CSS
- Javascript
- Node.js
- Mongo DB
- Express
- Webpack
- Mocha (testing framework)

### Third-party APIs
- [Google Maps API](https://developers.google.com/maps/)
- [Flickr API](https://www.flickr.com/services/api/)
- [iTunes API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
- [New York Times API](https://developer.nytimes.com/)
- [REST Countries API](https://restcountries.eu/)
- [Dark Sky API](https://darksky.net/dev/)
- [ISS Location API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/)

### Screenshots

Home news screen for east of US:
<img width="1270" alt="screen shot 2016-10-16 at 15 07 15" src="https://cloud.githubusercontent.com/assets/17859815/19417995/c20bb508-93b2-11e6-9fe0-1180865c078a.png">
