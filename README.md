# Acid Labs Task (Front-end)

This needs [acidlabs-task-server](https://github.com/mallendeo/acidlabs-task-server) running in order to work.

### Clone & Install

```bash
$ git clone https://github.com/mallendeo/acidlabs-task-client
$ cd acidlabs-task-client
$ yarn
```

### Live development server

```bash
$ yarn dev
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

Set the `REACT_APP_API_HOST` environment variable to your API:
```bash
$ REACT_APP_API_HOST="https://acidlabs-api-test.herokuapp.com/" yarn build
```

Builds the app for production to the `build` folder.

It bundles React in production mode and optimizes the build for the best performance.

## Heroku

Login to Heroku:

```bash
$ heroku login
```

Create a new app, then add a git remote using:

```bash
APP_NAME=acidlabs-frontend-test

$ heroku create $APP_NAME

Creating app... done, ⬢ acidlabs-frontend-test
https://acidlabs-frontend-test.herokuapp.com/ | https://git.heroku.com/acidlabs-frontend-test.git

$ heroku git:remote -a $APP_NAME
```

Set the `REACT_APP_API_HOST` variable:
```bash
$ heroku config:set REACT_APP_API_HOST="https://acidlabs-api-test.herokuapp.com/"
```

Finally, push the repo to Heroku's remote:
```bash
$ git push heroku master
```
