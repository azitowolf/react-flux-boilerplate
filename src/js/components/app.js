var React = require('react');
var Store = require('../stores/app-store.js')
var Actions = require('../actions/app-action.js')
var appConstants = require('../constants/app-constants.js');

var App = React.createClass({
	getInitialState:function(){
		return{
			names: Store.getNames(),
			newName: ''
		}
	},
	updateField:function(e){
		this.setState({
			newName:e.target.value
		})
	},
	handleAddNew:function(){
		Actions.addName(this.state.newName);
		this.setState({
			newName:''
		});
	},
	componentDidMount:function(){
		Store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		Store.removeChangeListener(this._onChange);
	},
	_onChange:function(){
		this.setState({
			names: Store.getNames()
		})
	},
	render:function(){
		var component = this;
		var namesList = this.state.names.map(function(friend){
			return (<li className="list-group-item">
				{friend}
				</li>);
		});
		return (<div>
			<h1>Names</h1>
			<ul className="list-group">{namesList}</ul>
			<div className="input-group">
			<input type="text" className="form-control" placeholder="Add Name" value={this.state.newName} onChange={this.updateField}></input>
			<button className="btn btn-success" onClick={this.handleAddNew}>Submit</button>
			</div>
			</div>)
	}
});

module.exports = App;