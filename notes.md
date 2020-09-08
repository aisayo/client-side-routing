# Client-side Routing :globe_with_meridians:

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

    - This needs to go around any part of the app that is going to use routing

4. Use `Route` to define route and component associated with route:
    `<Route path="/" component={Home} />`

    - the `Route` component receives 2 props: `path` and `component`
    - `Exact path` ensures exact path matches are made

### Link

- Equivalent to `<a>` tag
- Takes in `to` prop that provides detail about link location. Like `href`

### NavLink

- Different from `<Link>` only by allowing styling

Props:

- activeClassName - set to 'active' by default when link is clicked, can be customized (good to use in CSS)
- activeStyle - allows inline styling of selected link
- exact will style the exact link that matches the URL

### Switch

- looks through its children `<Route>`s and renders the first one that matches the current URL.
- Once it finds the first route that matches the path, it will not look for any other matches
- Should be used with `exact path`

### Nested Routing

- match.url
- match.path
- routerProps

### Render inside of Route

- used to pass props down
- used for simple route renders by defining inline code:

  `render={() => <div>Home</div>}`

- Can return a component as well, allows access to `routerProps`

## Resources

- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Router Video](https://reactrouter.com/)
- [The Hooks of React Router](https://css-tricks.com/the-hooks-of-react-router/)
- [React Router V5](https://reacttraining.com/blog/react-router-v5-1/)
