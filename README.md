# swapi-client
usafacts code assessment

This project spins up two docker services, a frontend react app and a backend python FastApi server. When running, the frontend is served at `localhost` (no port specification required).

## running instructions

1. Ensure the docker daemon is running
2. Check out the code
2. From the top level of the repository run `docker-compose  -f ./docker-compose.yml up --build`
2. Go to `localhost` in your browser

### tests

#### backend

The backend has a simple test file that can be run with default config in PyCharm when configured with a compatible interpreter (python 3.13 was used in development). It can also be run in terminal with the command:

`python -m unittest /path-to/swapi-client/swapi-client/api/src/main_test.py`

When a proper venv is present. (See ./api/Dockerfile for manual dependency installation steps).

#### frontend

create-react-app appears to hate Typescript in jest, which I found out late into development. And it limits how much jest config you can do without jailbreaking the framework. Installing babel typescript packages was not enough alone to get the jest tests working went run. For sake of time and sanity, I chose not to rabbit hole on this. I have written jest tests anyway, but have not been able to run them. At least this way it's demonstrating what tests I think should be written, etc, and if they wouldve caught a bug i havent manually, thats just on me.  

