# Client-side Routing

Goal: Making an app with multiple URL's that render different components

Different than what we have learned about routing so far! No HTTP requests involved

Faster because we are not waiting for a response, just switching components 

## React Router

- A routing library for React that allows us to link to specific URLs then show or hide various components depending on which URL is displayed

### How to use React Router

1. Install: `npm install react-router-dom`

2. Add to index.js file: `import { BrowserRouter as Router, Route } from 'react-router-dom';`

3. Wrap component being rendered to DOM with `Router`:
    `ReactDOM.render((<Router></Router>))`

4. Use `Route` to define route and component associated with route:
    `<Route path="/" component={Home} />`
    
    - the `Route` component receives 2 props: `path` and `component`

exact path

### NavLink


## Resources

- [React Router](https://reactrouter.com/web/guides/quick-start)
