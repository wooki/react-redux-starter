import { Map } from 'immutable';

export default function(state, action) {

	console.log("test reducer does nothing! "+action.data);

	// create new immutable state object here

	return Map(state.toJS());
}
