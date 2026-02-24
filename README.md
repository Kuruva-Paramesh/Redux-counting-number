React Redux Counter App 

Redux is a state management library. In React, Redux helps manage global state so multiple components can access and update the same data.

For a counter app, the state is just a number, and we can increment or decrement it using Redux.


2. Setting Up Redux in React

Step 1 – Install Redux packages

===>
     npm install redux react-redux @reduxjs/toolkit

step2 --Core Concepts in Redux

===>
       Store – Holds the entire state of the app.

        Action – An object describing what you want to do. Example: { type: "INCREMENT" }

        Reducer – A function that updates the state based on the action.

        Dispatch – Sends an action to the reducer to update the state.

        useSelector – React hook to read state from the Redux store.

        useDispatch – React hook to send actions to Redux.
