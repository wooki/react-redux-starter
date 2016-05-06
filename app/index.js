require("./scss/index.scss");

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from "./js/app.jsx"
import Reducer from "./js/reducer.js"

// crate the redux store with our reducer
let store = createStore(Reducer)

// append a container for the app
let rootElement = document.createElement("div");
document.body.appendChild(rootElement);

// render react root
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);