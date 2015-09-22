var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
};

module.exports = AppDispatcher;