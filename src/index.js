import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';
import Footer from './components/footer';
import { formatDistanceStrict, addMinutes, addSeconds } from 'date-fns'




const App = () =>{
	const todoData = [
		{id:1, text:'Completed task', state:'disabled', addTime:formatDistanceStrict(addSeconds(new Date(), 17), new Date())},
		{id:2, text:'Editing task', state:'edit', addTime:formatDistanceStrict(addMinutes(new Date(), 5), new Date())},
		{id:3, text:'Active task', state:'active', addTime:formatDistanceStrict(addMinutes(new Date(), 5), new Date())},
	]
return (
	<div className = 'todoapp'>
	<NewTaskForm/>
	<TaskList todos = {todoData}/>
	<Footer/>
	</div>
	
	)
	
}

ReactDOM.render(
	<App/>, document.getElementById('root')
);


