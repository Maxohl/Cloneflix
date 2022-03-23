# Netflix app - Clone

Project done for learning experience. 
Original : https://www.youtube.com/watch?v=PSOmihuvMH8&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv

## How to access

1- Clone this repository: https://github.com/Maxohl/Cloneflix.git

2- Download and Install **MongoDB Compass** and **MongoDB**

3- Open on the Terminal e.g.: `cd Downloads/Netflix`

4- Run `npm install` to install dependencies

5- On another terminal open : `cd Downloads/Netflix/ws`

6- Run `npm install` to install dependencies

7- Run `yarn start` or `npm start`

8- Start MongoDB 

-----------------------------------------------------

9- Open MongoDB Compass 

10- Click on **connect** to connect to localhost:22017

11- Use `Ctrl+C` to stop application

12- Run `node src/scripts/addUsers.js` to add users to the Database

13- Run `node src/scripts/addFilmes.js` to add a list of movies to the Database

14- Run `node src/scripts/addTemporadasEpisodios.js` To add seasons and episodes to series

15- Run `node src/scripts/addFilmesLogoMobile.js` To add logos fit for mobile to Movies

16- Run `yarn start` or `npm start`

> All data will be now on MongoDB Compass, click the refresh button to visualize it.


Back in the First Terminal:

17- Run `yarn start` or `npm start`

18 - Open a third terminal `cd Downloads/Netflix`

19 - Run `yarn android` or `npm android` 

-----------------------------------------------------

IMPORTANT : 

If you get a DebugManifest Error, try moving the Netflix Folder to C:/ 
This might occur if the path is too long or has special characters.
