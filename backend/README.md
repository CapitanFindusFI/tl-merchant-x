# TL Challenge Backend

This project has been made using Node.js with Typescript, developed with ESLint and nodemon. It uses Express to handle incoming HTTP calls, pino.js for logging purposes, Axios to communicate with 3rd-party services and Jest for testing.

## Project structure

This project follows a Controller - Service - Repository pattern as following:

#### Controllers

Controllers are just meant to validate incoming HTTP request, interact with services and then send back an answer to the requester. Requests are being validated using express-validator which also provides an effective returning error when validation fails.

#### Services

Services interact with repositories, getting data from repositories and applying the required business logic in order to send it back to the controller.

#### Repositories

Repositories are in charge of retrieving data from third-party services, which in this case are FunTranslations and Pokeapi APIs

#### Custom exceptions

While the original error is being logged by Pino, they provide a way to send a readable and useful answer back to the client. When a repository API call fails, or when service is not able to apply business logic to incoming external data, controllers will still be able to send a meaningful response back to the client.

#### Others

Beside the above, there is an HttpClient which underlies axios, a Logger which underlies pino.js and a simple error handler which gets used within the last Express middleware (only when an error is being thrown back at controllers)

## How to run it

As is comes with a Dockerfile, it can be built and run using Docker.
Express server is being exposed by default on port 6556 which can be changed (following next)

```
docker build . -t your_image_name
docker run docker run -p 4001:6556 your_image_name
```

There is also a handy makefile which can be used for both operations. Issuing `make build-and-run` in your terminal will execute the docker commands above with a default image name of `tl-pokemon-backend:local`

You can check if it's running by visiting `http://localhost:6556` (or the port you've chosen), server should answer with a welcome message.

#### Available configuration

Following here default runtime environment variables which can be changed

```
|Variable name|Default value|
|SERVER_HOST|"0.0.0.0"|
|SERVER_PORT|6556|
|LOG_LEVEL|"debug"|
```

## Available endpoints

`/`
`/healthcheck/ping`
`/pokemon/:name`

### Example request

```
$ curl http://localhost:6556/pokemon/celebi

```

### Error codes

|HTTP Code|Error code|Cause|
|404|`pokemon_not_found`|The pokemon you were searching for was not found on PokeAPIs|
|500|`translation_error`|There was an error calling FunTranslations APIs|
|500|`server_error`|An unhandled server error has occurred|
