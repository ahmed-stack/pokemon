# Getting Started Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Live demo
[Pokemon App](https://eager-poitras-47b00c.netlify.app)

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the required libraries

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


# Learn More

## Libraries Used

### redux / @reduxjs/toolkit / react-redux

For the state management of the application

### axios

To make HTTP requests

### react-router-dom

For the routing of application ( single page application routing without refresh )

### @testing-library/react / @testing-library/jest-dom / @testing-library/user-event

For the testing of the application. ( Unit Testing, Integration Testing , Component Testing, End to End Testing )

### bootstrap / react-bootstrap

For the styling of HTML and use of pre build components like Modals, Grid, Cards

### styled-components
For the styling of HTML elements in a convenient way ( provide more readable and maintainable css, prevent duplication in classnames )

### react-loader-spinner
For the loading animation of application

### react-infinite-scroll-component
To load more content on scroll 


## Challenges Faced

### Getting Pokemon List With Details
Get pokemon list api just provide a list of pokemons with name and url, so to get more detail about pokemon calling each pokemon detail api separately to get pokemon more details and append them in a list in a quick way so to that user can easily find the desired pokemon from list is something challenging.

### Filter Pokemon By Generation
As get pokemon list api provide less information about each pokemon, same way getting a generation does not provide more details about pokemons in that generation. So calling each pokemon detail api in that generation efficiently to decrease the load time is something challenging for me.

### Integration Testing
Integrtaion testing of banner component and pokemon list component to test the search pokemon and filter pokemon functionalities is challenging. Writing all these tests in a single component using RTL ( react-testing-libraray ) with JEST creates leakage problem of previous render in the next render. This is something annoying in RTL, so to overcome this have to make separate test files.


## Future Implementations

### UI and Animations
Add some animations and improve UI to make it more interactive.

### Compare More Than Two Pokemons
Add feature to compare more than two pokemons based on the user choice to make comparsion between different pokemons in a more effective way.

### Pokemon Images
Add a slider or image gallery for each pokemon which contain pokemon all front and back side images.

### Better Pokemon Feature
Add a feature to predict which pokemon is better in comparison, based on the pokemon stats.
