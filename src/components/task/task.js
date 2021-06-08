import React from 'react';


import './task.css';

const Task = ({id, text, state = "", addTime}) =>{
	

	const liClass =() => {
 		if (state ==='edit') return "editing"
		else if (state ==='disabled') return "completed"
		else return null
	}

	return(

	          <li className={liClass()} >
				<div className="view">
					<input className="toggle" type="checkbox"/>
					<label>
						<span className="description">{text}</span>
						<span className="created"> created {addTime} ago

						</span>
					</label>
					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy"></button>
					
				</div>
				<input type="text" className="edit" value = {text} readOnly/>
          	</li>
	);
}

export default Task;