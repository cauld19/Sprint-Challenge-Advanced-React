- [ ] Why would you use class component over function components (removing hooks from the question)?

If you needed access to lifecycle hooks you would need to use a class component rather than a functional component.


- [ ] Name three lifecycle methods and their purposes.

render() : The only required method within a class component. Handles the rendering of your component to the UI and happens during the mounting and updating of your component.

componentDidMount() : componentDidMount() is called when the component is mounted and ready. Normally this is where you initiate API calls. Allows for the use of setState.

componentDidUpdate() : Invoked when updating happens. Used normally for updating the DOM in regards to prop or state changes.


- [ ] What is the purpose of a custom hook?

A custom hook will allow you to extract non-visual behaviour and stateful logic into a reusable function.

- [ ] Why is it important to test our apps?

Testing reduces the risk of bugs being inside production code. 

