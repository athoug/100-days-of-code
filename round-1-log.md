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

### R1D7: January 7 Monday
Today was a tough one. Went over persisting data using `localStorage` covered the key value pair of it and how to convert an object to a string and vic verca [using the JSON object] `JSON.parse(string)` and `JSON.strigify(object)` also covered another life cycle event `componentDidUpdate` and how to change local storage there. also how to re-establish it when mounting the app. Then we moved on to bi-directional data where we pass in data from the app to it's component and how in forms you need to have a form handler that is conected to the state in order to actually display the changes. Covered CRUD and both updating and deleting items or rather data from the state. wooh that was a lot!

### R1D8: January 8 Tuesday
You can never go wrong with animation! Today was super fun worked on animating React components, also on validaing `props` uisng the `prop-types` package. What i undestood today... I now know how to work with react!

_thought_ super happy :)

### R1D9: January 9 Wednesday
It was all about Authentication today. I won't lie it was a tough one and definatly one that required re-visiting but I'm glad I tackled it I understood the jist of it from API tokens, secrete, and checking the user and rendering based on that but I think I need to still go over it from the database perspective. Also finally built the app for production!

### R1D10: January 10 Thursday
Today was short and a couple of issies depolying the app :(

### R1D11: January 11 Friday
I completed the Wes Bos course 'React for Begginers'!! I can officialy say I know React :) so so happy. Now for today I started with Wes's `Flexbox` course a good start. I'm also going over 'React for Visual Learners' to hone in React and become a better develper in the time I'm learning Flex. Also my friand and I are working on a data completition which will be fun.

### R1D12: January 12 Saturday
Flex is making more sence now. So glad that I'm following along teh course. I also wen't over chapter 2 of the 'React for visual learners' book.

_Note to self_ slow and steady wins teh race.

### R1D13: January 14 Monday
We're back at it! Covered all the basics of Flexbox. And started chapter 3 of the 'React for Visual Learners' course. 

_Note to self_ we got this mate!

### R1D14: January 16 Wednesday
Completed the Flexbox course!

### R1D15: January 17 Thursday
So we started two React Related courses. 'React Complete Guide' and 'Learn Redux' by Wes Bos. 

_Note to Self_ Don't get overwhelmed it's all okay. 

### R1D16: January 20 Sunday
still on the two courses on React and Redux. In the react course wen't over a couple of refresher on next generation JS and in the redux course created ourt redux store, our actions and reducers.

_Note to Self_ Think of actions as events and reducers as event handlers 

### R1D17: January 21 Monday
still on the two courses on React covered quite a few in the redux course. Went over dispatching [which is basicaly firing events] of the actions and connecting our states and actions to our props, also covered teh first reducer example and adding some animation to it. For the React course, today I just practiced a bit of next gen JS jsut to hone in the concepts.

