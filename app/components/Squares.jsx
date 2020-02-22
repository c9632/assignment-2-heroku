const React = require("react");

function squares(props){
	// const colorBlock = (items) =>{
	// 	if (props.items == 'X'){
			
	// 	}
	// }

return (
	//<button className="square" onClick={onClick}>{props.item}</button>
	
	<div className='square' onClick={props.print.bind(props,props.id)}>{props.items}</div>
	);
 }

module.exports = squares;
