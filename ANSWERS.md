- [ ] Why would you use class component over function components (removing hooks from the question)?

That's a good question. First, it may be because you are on a team that uses class components instead of functional components. Hook (functional) components are less code, easier to read, and test.


- [ ] Name three lifecycle methods and their purposes.

componentDidMount(): We used this one in the challenge. At the Birth of the compnent, which is a one time event, you can use this to execute data retrieval, or other one time tasks. Again, this is a one time event at the beginning of the component.
componentDidUpdate(): We can use this for any components that will update after the birth of the component. An example is an updating news/twitter feed. Right after it is first drawn on the DOM.
componentWillUnmount(): We use this to execute a cleanup for event listeners and dumping data that no longer has use at the end of the life of a component (when it leaves the dom)


- [ ] What is the purpose of a custom hook?

To create Reusable modular code. It has less lines of code for the same effect and is easier to maintain.

- [ ] Why is it important to test our apps?

Time and Money. Also, since we made the app, we need to ensure it's healthy use for all cases. We can do that with testing techniques.