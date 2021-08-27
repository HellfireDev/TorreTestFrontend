# Fullstack Test: Frontend

Hero's Journey App (made with React.js {create-react-app} using Hooks) is a responsive web app inspired by the age old Hero's Journey pattern (getting started and overcoming challenges cycle), which uses the power of torre API to authenticate a torre user, present 3 random strenghts, interests and experiences of that person; and then suggests 3 potential jobs and 3 potential mentors based on user selected combinations. The goal is to challenge the user to explore new and varied opportunities for growth, just like a hero.

## Features
- Basic authentication flow.
- Responsive design for all views (some tweaks are still required though).
- Basic routing and error toasts.

## App URL
https://herosjourneyapp.herokuapp.com/

## Backend Project
https://github.com/HellfireDev/TorreTestBackend


## Project Structure

- public/assets: Holds images used in the app.
- Inside src/
- auth: Register and login context and reducer.
- config: Currently only holds API endpoints urls.
- helpers: Abstracted logic mainly for API calls and cleaning up main components.
- hooks: Custom hooks.
- Pages: Components organized by each app page.
- Routers: Routing-dom component.
- Types: Common used types to reduce typos.
- index.js/App.js: Top level App components.


## Some screenshots
![image](https://user-images.githubusercontent.com/52900601/131102789-9bec4b1a-d4b4-4c08-ba7d-f66c8fc0d151.png)
![image](https://user-images.githubusercontent.com/52900601/131103084-5b20bd9d-289b-4ee7-9e2e-de62b365169d.png)

