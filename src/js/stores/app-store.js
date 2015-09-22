var Actions = require('../actions/app-action.js');
var Dispatcher = require('../dispatchers/app-dispatcher.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var appConstants = require('../constants/app-constants.js');
var CHANGE_EVENT = 'change';


var _store = {
	names: ['Alex', 'Sam', 'Henrietta', 'Tom', 'Sarah', 'Beth']
};

var addName = function(name){
	_store.names.push(name);
}

var removeName = function(index){
  _store.names.splice(index, 1);
}

var nameStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener:function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	getNames:function(){
		return _store.names
	}
})

Dispatcher.register(function(payload){
	var action = payload.action;
	if (action.actionType === appConstants.ADD_NAME){
		addName(action.data);
		nameStore.emit(CHANGE_EVENT);
	}
})

module.exports = nameStore;
