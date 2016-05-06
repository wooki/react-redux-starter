import { mapReducers } from 'redux-map-reducers';
import { Map } from 'immutable';

import testReducer from "./reducers/testReducer.js"

const initialState = Map({
	one: "1",
	two: "2"
});

export default mapReducers({

  'TEST_REDUCER': testReducer

}, initialState)

