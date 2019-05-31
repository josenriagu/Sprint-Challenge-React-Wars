# Answers

1.  What is React JS and what problems does it try and solve?
    
    React is a `Javascript library` created by Facebook team which is used to create basic components that are reusable on the same app or anywhere else. It is commonly seen as the `view layer (with regards to MVC)` for web applications.
    React is particularly important in complex projects since it disjoints the bulk of the projects into small composable pieces `(components)` which may be reused by one another at lower levels or become integrated back at the higher level component. This replaces the traditional javascript components and simplifies complex UI tasks.
    On the other hand, in web apps that require constant change of state such as social networks interactions, direct browser DOM manipulation will comsume time and resources. React's virtual DOM offers a more efficient way to update the DOM with only what is needed as the state(s) change(s).

1.  What does it mean to _think_ in react?

    `_ThinkingInReact_` means to view a web project as a large unit of breakable basic blocks and treating it as such. This involves 
    1. Breaking the UI into a component hierarchy
    2. Building a static version in React
    3. Identifying the minimal yet complete representation of the UI state
    4. Identifying the state niche
    5. Adding inverse data flow.
    
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    
    A `Functional Component` does not directly deal with changes in UI state and may not require other react methods such as `React.component`. A `Class component` on the other hand, is used when we wish to consider changes in the UI state and as such, must have a constructor which takes in the state slices.

1.  Describe state.

    A `State` is an object that determines how components are rendered and behaves. It often takes into consideration certain broswer actions or user interactions and causes the components to `re-renders` accordingly. This makes components dynamic and interactive.

1.  Describe props.

    `Props` are arbitrary inputs to React components that determine what React element will be returned to the screen.

