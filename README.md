# TL Challenge - Pokemon
This project is made of a backend and a frontend, which contains their own specific READMEs. In this one, however, I will discuss the common areas of improvement which can be made.

#### [Backend](https://github.com/CapitanFindusFI/tl-merchant-x/blob/master/backend/README.md)

#### [Frontend](https://github.com/CapitanFindusFI/tl-merchant-x/blob/master/frontend/README.md)

## How to run it
Both projects have their own running instructions, but project root contains a docker-compose file which can be used for a quick start.

Just use
```
docker-compose up
```
And visit http://localhost:4000 for the frontend application.
Backend server will listen on http://localhost:4001


## Areas of improvement

### CI/CD
Both projects can be used within a CI/CD pipeline to run tests, build their own docker image with different environment variables based on different deploy environments, and then eventually released on whichever Cloud Provider