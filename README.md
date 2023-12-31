# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# About Neural Network Graph Project

Package Used - React Flow (For Graph)

# To Start the project in local machine

### `npm install`

### `npm start`

# Implementation

To represent the Neural Graph, I have used React Flow package.

- To represent each operator i.e., Convolution, Relu, etc, I have created a `custom node` representation.
- For edges, created two variats one is Line and another is Animated Dashes to highlight the current edge
- On each node click, a side drawer will open with respective attributes, Input and Output including `Delete` node option.
- Control panel in the left bottom corner contains `Zoom in`, `Zoom out`, `Fit View`, `Lock` from editing, `Add` node and `Reset`.
- Pan option available
- Dynamically `Add` node
- Clicking on Add node opens a Modal with respective types to select, newly added node will be visible bottom of the graph.
- Forward/Backward visualize, Click on the `from` or/and `to`, to notice the visual representation of connecting nodes and edges.
- Hover on nodes to see the respective operator type.
- Currently, On clicking on the `from` or/and `to`, edges will show its connecting ids.

- I have used a mock data to curate this graph, after playing around with graph to go back initial representation, use `Reset` button in the controls.
