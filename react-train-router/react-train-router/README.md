# React Train Router

<img src="./map.jpg" width="600px"/>

## Setup
As always,
1. Fork and Clone
2. Install dependencies 
3. Get hacking!

## Instructions
Currently, every train route in our application is displaying at the same time! Let's leverage React Router to only render the stations we're currently looking for in our nav bar.

1. Before we can implement React Router, we have to install it. Run `npm install react-router-dom` within this folder to install it.
2. After your installation has finished, open `src/index.js`, and import `BrowserRouter` as `Router` from `react-router-dom`.
3. Wrap the `<App />` component in `<Router />`, so we can implement `<Link />`s and `<Route />`s.
4. Open `src/Navbar.jsx`. In the `<nav>`, create a `<Link />` that directs the user to `/union-square`, with the text content `"Union Square-14th St"`, and another that directs the user to `/`, with the text content `"Home"`.
5. In `src/App.js`, add the `<Routes />` component and a new `<Route />` with a path of `/` and make its contents an `<h2>` with the text `"Welcome Home!"`.
6. In `src/App.js`, call the `<Station />` component within a `<Route />`. This `<Route />` should have a `path` that corresponds to the `to` attribute of our newly created `<Link />`.
7. Ensure that the `<Station />` with the trains from Union Square only displays when you click the Union Square link.
8. Once this functionality has been achieved, add corresponding links and routes for the rest of the stations (`/times-square`, `/atlantic-avenue`, and `/fulton-street`).

> ‼️ The API that is being utilized for this lab does not have CORS installed. Soooo, in order for you to see the data without error messages, you will need to install a chrome extension that will allow it. There are multiple extensions, but the one I use is called "CORS Unblocker" (photo below). Once you are done with the assignment, be sure to disable the extension. 
> 
> ![Screen Shot 2024-02-15 at 4 23 11 PM](https://media.git.generalassemb.ly/user/41550/files/45f61925-79d8-4af8-b6d0-f6db7532b6ca)


#### Bonus
1. Add one station to the home page.
2. Look at the documentation for the API and add your own `<Station />` components with different stations and corresponding `<Route />`s.

## Acknowledgments
Thank you to the [MTAPI](https://github.com/jonthornton/MTAPI) for converting the GSFS from the MTA Real-Time API to JSON. 
