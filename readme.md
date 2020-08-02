# Task
Your task is to create a client for a weather API.
We have already implemented the user interface for this in `app.js`. Your task is to finish implementing the functions that will be calling the api.

You need to implement the 6 functions that are currently stubbed in the `src/index.js` file and then write corresponding tests for them. You should not make any changes to the `app.js`.

The exported functions must always return a number, if the function would error or not return a number it should return `0`

As this task will be tested automatically, you must not change the name or inputs of the exported functions in the `src/index.js`.

If you want to split the task across multiple javascript files, please add them into the `src` folder.

## FAQ
### Am I allowed to use third party libraries?
Yes, you can use any third party libraries you want.

# API
The api docs are in a separate markdown file called `api.md`.

# Setup
To begin please run: `npm i` to install all packages that are required.

# Running 
You can run `node app.js` to run and test the exported functions in `src/index.js`. 

# Tests
Jest is used to test this task.
To run the tests run: `npm run test`

A tests folder has already been created with a `tests/structure.test.js` file. Please don't modify this test file, it is used to ensure that the exported functions in the `src/index.js` return the correct type.

A failing test has also been created in `tests/getMaxTemperature.test.js`. Getting this to test to pass should be a good starting point.
