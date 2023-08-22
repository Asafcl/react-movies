App  
MovieCard  
actions/movies  
actions/search  
reducers/movies  
reducers/search
reducers/index  
index


App.js:
This is your main component where you're rendering your application. Here's what's happening in this file:

Importing required dependencies, including useState, useEffect, and components from Redux.

The App component receives the movies, setMovies, searchResults, and setSearchResults as props from Redux state and actions.
Inside the useEffect hook, you're fetching data from the API_URL when the component mounts. The fetched data is used to set the movies state using the setMovies prop.
You have a handleSearch function that fetches data from the API_SEARCH URL based on the user's input. The fetched data is set as searchResults using the setSearchResults prop.
The handleInputChange function updates the term state with the user's search input.
The component renders the title, search bar, and movie cards. Depending on whether there's a search term (term), it either shows the searchResults or the movies.
MovieCard.js:
This is a functional component responsible for rendering individual movie cards:

The component receives movie-related properties as props and uses these props to render the movie details.
It contains HTML structure to display the movie poster, title, vote average, and an overview.
actions/movies.js:
This file defines the action creator setMovies which is responsible for creating an action object with a type of 'SET_MOVIES' and the payload being the array of movies.

actions/search.js:
Similar to actions/movies.js, this file defines the action creator setSearchResults which creates an action object with a type of 'SET_SEARCH_RESULTS' and the payload being the array of search results.

reducers/movies.js:
This reducer handles the movies part of your Redux state. It specifies how the state should be updated when an action of type 'SET_MOVIES' is dispatched. The initial state is an empty array.

reducers/search.js:
This reducer handles the searchResults part of your Redux state. It's similar to reducers/movies.js and handles how the state should be updated when an action of type 'SET_SEARCH_RESULTS' is dispatched.

reducers/index.js:
This is the root reducer where you combine multiple reducers using Redux's combineReducers function. It defines how different parts of your Redux state are managed and updated.

index.js:
This is the entry point of your application. It sets up the Redux store using the createStore function and combines your reducers using the rootReducer. The Provider component wraps your App component to provide access to the Redux store throughout your application.

Overall, Redux is being used to manage your application's state. It helps separate concerns and maintain a predictable flow of data. Actions define what kind of changes can happen, reducers specify how the state changes in response to actions, and the store holds the global state of your application. Components interact with this state using the provided props and dispatch actions to update it.





https://www.themoviedb.org/

api read access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzZjM2YmM5YTg4NWMzZDNhMjY2NGE3OGY4NTIwYSIsInN1YiI6IjY0ZGI4M2IwMzcxMDk3MDBhYzQyZmY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvUz2qVmmSdeVYhXTJlcNBSNEgrTlql6SF7ISBqvD78

api key: 4ef3f36bc9a885c3d3a2664a78f8520a


API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4ef3f36bc9a885c3d3a2664a78f8520a"


API_IMG = "https://image.tmdb.org/t/p/w500/"


API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=4ef3f36bc9a885c3d3a2664a78f8520a&query=";


 <!-- <img src={API_IMG + props.poster_path} alt="movieimg"/> -->

 https://unsplash.com/s/photos/cinema



 <!-- https://bootstrapmade.com/bootstrap-portfolio-templates/ -->







The Redux version of movie-app builds upon the previous non-Redux version by introducing a centralized state management approach. Here's how the Redux version differs and what benefits it brings compared to the previous version without Redux:

Previous Version (No Redux):

In the previous version, state management was done using React's local state (useState).
The state variables (movies, term, etc.) were managed within the App component itself.
Data fetching, state updates, and UI rendering were all handled within the same component.
Data sharing between components required prop drilling, passing data down through multiple levels of components.
Redux Version:

In the Redux version, state management is centralized using the Redux library.
State is stored in a single Redux store and is accessible to any component connected to the store.
State-related logic, actions, and reducers are separated from the UI components, improving code organization.
Redux allows you to define action creators and reducers to update the state in a predictable and structured way.
You have a clear separation between presentational components (UI) and container components (connected to Redux store).
Components can access the state and dispatch actions directly from the Redux store, eliminating prop drilling.
Redux DevTools provide tools for monitoring and debugging your application's state changes.
Benefits of the Redux Version:

Centralized State: Redux offers a single source of truth for your application's state, making it easier to manage, update, and access data.
Predictable State Changes: Actions and reducers ensure that state changes are well-defined and predictable, preventing accidental data mutations.
Code Organization: Redux encourages a separation of concerns by isolating state management from UI components.
Global Accessibility: State is available to any connected component, reducing the need for prop drilling and simplifying data sharing.
DevTools: Redux DevTools provide debugging tools for tracking state changes and actions, aiding in development and troubleshooting.
Scalability: As your application grows, Redux provides a scalable way to manage state without introducing complexity.

Overall, the Redux version offers a more structured, maintainable, and scalable approach to state management, which can be especially beneficial as your application becomes more complex and requires more advanced data handling.

