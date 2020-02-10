import React from 'react'
import Todo from './Todo'

const TodoList = props => {
	return (
		<>
			<div className='to-do-list'>
				{props.userTask.map(item => (
					<Todo key={item.id} item={item} toggleItem={props.toggleItem} />
				))}
			</div>
			<button className='clear-btn' onClick={props.clearList}>
				Clear Finished Tasks
			</button>
		</>
	)
}

export default TodoList
