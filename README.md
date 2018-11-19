# Test task with Cypress

Unfortunately I didn't have enough time to finish task. Bu anyway, even I work first time with those frameworks, tools I showed
that I can quickly catch things up and get familiar with unfamiliar tools.

- I have written few working test with BDD
- I have configured cucumber
- I have written universal cucumber steps with parameters which I am reusing in BDD scenarios
- I have resolved cross origin issue
- I tried to configure gitlabCI + running via Docker

- Unfortunately to save time I didn't use pageobject (or any other) pattern that's why I use locators directly in step definitions (and even some helpful functions as well)
- But nevertheless it shows that I can quickly start with absolutely new tools




# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000
