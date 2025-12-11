import React, { useEffect, useState } from 'react'
import Table from './Table'

const Input = () => {
	interface Todo {
		task:string,
		priority:string,
		id:number
	}
	const[todos,setTodos] = useState<Todo[]>([])
	
	const [todo,setTodo] = useState<Todo>({
		task:"",
		priority:"",
		id:Date.now()
	})

	const sendIt = () => {
		event?.preventDefault()
		let updated = [...todos,todo]
		setTodos(updated)
		localStorage.setItem("todos",JSON.stringify(updated))
	}
    
	const Changes = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setTodo({...todo,[e.target.name]:e.target.value})
	}

  return (
		<>
			<div className="h-100 w-[50%]  border-  grid items-center">
				<h1 className="text-center font-medium text-3xl sm:text-4xl border-  ">
					Add TODO
				</h1>
				<form
					onSubmit={sendIt}
					className="flex justify-center flex-col border-4 w-80 sm:w-120  h-full gap-3 sm:gap-5 "
				>
					<span className="grid ">
						<label className="text-center mb-3 font-medium text-2xl">
							Task
						</label>
						<input
							onChange={Changes}
							name="task"
							className="border-2 h-8 w-60 m-auto  text-center "
							type="text"
						/>
					</span>
					<span className="grid ">
						<label className="text-center mb-3 font-medium text-2xl">
							Priority
						</label>
						<select
							onChange={Changes}
							name="priority"
							className="border-2 h-8 w-60 m-auto "
						>
							<option className="text-center" value="none">
								None
							</option>
							<option className="text-center" value="High">
								High
							</option>
							<option className="text-center" value="Normal">
								Normal
							</option>
						</select>
					</span>
					<input
						className="border- mt-5 w-60 mx-auto  text-2xl bg-black text-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.25)] "
						value="Set"
						type="submit"
					/>
				</form>
			</div>
			<Table/>
		</>
	);


}

export default Input
