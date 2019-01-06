# #100DaysOfCode Log - Round 1 - [Athoug Alsoughayer]

The log of my #100DaysOfCode challenge. Started on [January 1, Tuesday, 2019].

## Log

### R1D1: January 1 Tuesday
I have a couple of courses to go through but this will be the year of front-end for me and starting it off with React! 
I'm going through the Wes Bos course 'React for Beginners' so far we covered the tooling, what components are and created 
my first component 

### R1D2: January 2 Wednesday
We continue the course and covered this time JSX and how to use it, importing CSS and laying out the appliaction.

### R1D3: January 3 Thursday
Still on the course coviring React. Today's topics includes `props` how we pass data between diffrent compponents and that is you want to pass anything other than a string, wrap it in a set of `{ }`. Also we covered statless components or functional components basically if a component doesn't need it's own state then it's best it becomes a functional components [function based]. And finally covered routing and we used react router. It's basically what to render to the screen based on the path/url of the application.   

### R1D4: January 4 Friday
React world we're still on! So today we covered a couple of topics. Helper functions in a sence that it's a good idea to have funcitions such as curency formater, random name generator.. etc in it's own file which you can import and use inyour application. Also learned that in react value of an input has a diffrent menaning so if you want to have a default value for your input, use the attribute defaultValue [love that it's aptly named]. learned about methods in react and that they need to be binded to refrence the actual components and that there are two ways of binding one is in the constructor method whilst the otehr way is through a property expression [using teh arrow function]. Also learned that inporder to refrence an lement in react you can't use the defaul way of refrencing elements in the DOM because the golden rule is not to touch the actual DOM so what we need to do is creat a react refrence to an element and attach it as an attribuet to the lement we want to refrence. finally changing location in our application we can do that through react router using the props that's passed down to us [using the history pobject we use the push method to change the location of our app or ratehr path].

### R1D5: January 5 Saturday
State here we come. Today I explored States in React, initializing them, updating them. also covered a bit destructoring and making compies in ES6. how to load sample data to a state, and finally constructing a component and displaying a list of state objects [of course turning the object into an array first then looping over the array using the map method]

### R1D6: January 6 Sunday
We're starting to get to the nitty and gretty since we introduced firebase. okay backup so what wel learned today were quite a few things. I learned how to do conditionals in React as in based on a condition disable something and return something if it's avaliable other wise return something else. Also learned about `reduce` and how to tally things up in react. converting an object to a list with `Object.keys(some object)` and finally persisting data with a database in this one we used firebase. still not sure how to use it but an into wasn't bad. we inisialized the application with the firebase method `firebase.initialize()` and then connected it with react by using the `re-base` library. we also had a small intro to life cycle methods `componentDidMount()` where we created a refrence to the database and syncing it to our state at the same time listening to changes. also `componentWillUnmount()` where we stop lisining to changes since the application will unmount.
