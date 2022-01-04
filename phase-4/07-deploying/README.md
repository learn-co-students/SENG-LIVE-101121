# Lecture 7 Deploying

### Requirements and Setting Up

1. `Git` should be installed, Heroku will require it. [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)(If you are here, this should already have been installed at the beggining of the program)

2. Heroku account. [Sign up here](https://signup.heroku.com/devcenter)

3. `Heroku CLI`

- To download for OSX: `brew tap heroku/brew && brew install heroku`
- To download for WSL: `curl https://cli-assets.heroku.com/install.sh | sh`

4. Ruby version: 2.6.8, 2.7.4, 3.0.2
   2.7.4 is the recommended version

- Check Ruby version using `ruby -v`
- Update Ruby version with `rvm install <version>`
- Check what versions are already installed with `rvm list`
- Switch to a currently installed version with `rvm use <version>`. You can also set a version to the default by doing `rvm use 2.7.4 --default`
- Make sure to run `gem install bundler` and `gem install rails` after upgrading Ruby version

5. PostgreSQL

- To install on WSL:
  - Run `sudo apt update` and `sudo apt install postgresql postgresql-contrib libpq-dev`
  - Confirm installation with `psql --version`
  - Start Postgres servise: `sudo service postgresql start`
  - Create a database user:
    1. `whoami`
    2. `sudo -u postgres -i`
    3. `createuser -sr <return value of whoami>`
    4. `logout` to exit
- To install on OSX:
  - Run `brew install postgresql`
  - To start Postgres service: `brew services start postgresql`

### What is Heroku

"Heroku (Links to an external site.) is first and foremost a Platform as a Service (PaaS), which means they manage the hardware your code runs on as well as the software environment, with an aim of making it as simple as possible to take the code from your machine and run it on theirs. Heroku also has a free tier for developers to try out the service at no cost."

### Creating a Rails/React app w/ Postgres initially installed:

1. Create a Rails app specifying that the database that will be used is Postgres

```bash
rails new <app-name> --api --minimal --database=postgresql
```

2. `cd app-name` and run the following command to ensure that bundler will be able to install the same gems on Heroku:

```bash
bundle lock --add-platform x86_64-linux --add-platform ruby
```

3. To create a new development database, run:

```bash
rails db:create
```

4. Make sure to comment back in `bcrypt` inside `gemfile` and run `bundle update` to be able to use password authentication methods provided by `has_secure_password`

5. Create the model files with the rails model generator.

6. Create controllers using rails controller generator to allow for namespacing. This will ensure that problems do not persist or interfere with React routing.

```bash
rails g controller api/<controller-name>
```

7. For authentication, need to configure support for cookies. Add the following:

```rb
# config/application.rb
  config.middleware.use ActionDispatch::Cookies
  config.middleware.use ActionDispatch::Session::CookieStore
  config.action_dispatch.cookies_same_site_protection = :strict
```

8. Define a fallback route inside `config/routes.rb`

```rb
...
get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
```

Create a FallbackController that inherits from `ActionController::Base` with the following code:

```rb
class FallbackController < ActionController::Base
  def index
    render file: 'public/index.html'
  end
end
```

### Adding React

1. Create a package.json file at the root of the project, within the rails app.

```bash
touch package.json
```

add the following code to the file:

```json
{
  "name": "heroku-deploy",
  "description": "Build scripts for Heroku",
  "engines": {
    "node": "15.6.0"
  },
  "scripts": {
    "clean": "rm -rf public",
    "build": "npm install --prefix client && npm run build --prefix client",
    "deploy": "cp -a client/build/. public/",
    "heroku-postbuild": "npm run clean && npm run build && npm run deploy"
  }
}
```

Note about the node version on line 169. This should match the version that is installed in your system

2. Create a React application while inside Rails app:

```bash
npx create-react-app client --use-npm
```

3. Inside react app `package.json` file add proxy and default port.

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:3000",
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router": "^6.0.2",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "PORT=4000 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

4. Test Rails + React application to catch any bugs

```bash
npm start --prefix client
```

in a separate terminal:

```bash
rails s
```

Navigate to `http://localhost:4000` to test

5. Test out configurations by running inside Rails directory:

```bash
npm run heroku-postbuild
```

then

```bash
rails s
```

Navigate to `http://localhost:3000` to test

### Heroku time!

1. Create a procfile

```bash
touch Procfile
```

2. Add the following code to the procfile:

```
web: bundle exec rails s
release: bin/rake db:migrate
```

3. Login in to Heroku from app

run `heroku login` and login via browser pop up. Check to see if you are logged in via terminal with `heroku whoami`

4. Initializing a Heroku application

```bash
heroku create
```

5. Tell Heroku to first run a build script for our React app using NodeJS before running the build script for our Rails app

```bash
 heroku buildpacks:add heroku/nodejs --index 1
 heroku buildpacks:add heroku/ruby --index 2
```

6. Commit changes to Heroku. The branch can be either `main` or `master`. Run `git branch` to see which branch you are on.

```bash
git add . 
git commit -m "changes" 
git push heroku main 
```

7. To run in browser

```bash
heroku open
```

As your app is in production, if you run into any issues you can search the logs by running `heroku logs` 