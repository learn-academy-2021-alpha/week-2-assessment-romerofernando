# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method super()?

  Your answer: I would use the super() method when I am wanting to inherit an atribute for an object. 

  Researched answer:
super() is used to call the parent constructor. super(props) would pass props to the parent constructor. From your example, super(props) would call the React. Component constructor passing in props as the argument.


2. What is a virtual DOM?

  Your answer: A virtual DOM is created when using react, this listens to changes made through the page and updates them without needed to refresh the entire page. 

  Researched answer:
  The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. ... They may also be considered a part of “virtual DOM” implementation in React. Like the actual DOM, the Virtual DOM is a node tree that lists elements and their attributes and content as objects and properties. React's render() method creates a node tree from React components and updates this tree in response to mutations in the data model, caused by actions



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: you would need a render tag a return tag and anything you want visible one the page  would be placed between <> </>

  Researched answer:
Create new Header component and type out the below code into Header.js. src\components\Header.js. 
Create new Footer component and type out the below code into Footer.js. src\components\Footer.js. 
Now, update default App.js with below code snippet. src\App.js.



4. What is JSX?

  Your answer: JSX is a language used by react to integrate HTML and javascript

  Researched answer:
  JSX stands for JavaScript XML it allows us to write a HTML in React making it easier to write and add HTML in react



5. What is state in React?

  Your answer: State holds the information for the app to use. 

  Researched answer:
React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.


6. STRETCH: What is hoisting in JavaScript?

  Your answer: I dont know yet but will look into it and get the answer 

  From what I read it sounds like a the var or declared values are stored at the top of the file but still can not be iniciated until it is read through the line. This may be helpful when multiple declared values are used. 

  Researched answer:
  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
A component in React that is monitored and manipulated during the three main phases. Mounting Updating and Unmounting

- React props
react props are like functions in javascript 

that pass arguments into react components

- event.preventDefault()

A method that that cancels out a defualt action when it is able to be cancelable

- DOM events
This allows javascript to register different event handlers on elements in an HTML document. 

- MVC

Model-view-controller
a software design pattern used to develop user interfaces that divides the realted program into three interconnected elements. 
