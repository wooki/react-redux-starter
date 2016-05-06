import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	console.log("mapStateToProps");
  	console.dir(state);
  	console.dir(ownProps);
  	return state.toJS();
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: function() {
      dispatch({
      	type: 'TEST_REDUCER',
      	data: '0101010101'
      });
    }
  }
}

const App = React.createClass({

	render: function() {

		console.log("render:");
		console.dir(this.props);

		return <p onClick={this.props.onClick}>Hello World!</p>;
	}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

