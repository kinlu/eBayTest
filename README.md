# eBayTest

This test is built on top of [codeceptJS](https://codecept.io/).

## Using docker
The easiest way to run this test is via docker as it has been dockerised.  You can simply copy the ```docker-compose.yaml``` try the test using:
```
docker-compose up
```

## Run with code - with selenium in docker
### Start seleninum HUB in docker
```
npm run start:seleniumdocker
```

### Run the test
```
npm run test:docker
```

## Run with NPM

### Install dependencies
```
npm install
```

### Start selenium standalone sever
In one terminal, run below command in the script folder.
```
npm run start:selenium
```

### Run test and report
In another terminal thread, run test with below command.
```
npm test
```

Mocha html reports for chrome and firefox are placed in the ```/output``` folder respectively.
