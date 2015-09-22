var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var appConstants = require('../constants/app-constants.js');

var nameActions = {
  addName: function(name){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_NAME,
      data: name
    });
  }
};

module.exports = nameActions;