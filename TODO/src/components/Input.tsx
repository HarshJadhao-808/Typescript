import React from 'react'

const Input = () => {
  return (
		<div className="h-100 w-[50%]  border- p-8 grid items-center  ">
			<h1 className="text-center font-medium text-3xl sm:text-4xl border-  ">Add TODO</h1>
			<form className="flex justify-center flex-col border-2 w-full h-full gap-5 ">
				<span className="grid ">
					<label className="text-center mb-3 font-medium text-2xl">Task</label>
					<input className="border-2 h-8 w-60 m-auto  text-center " type="text" />
				</span>
				<span className="grid ">
					<label className="text-center mb-3 font-medium text-2xl">Priority</label>
					<select className="border-2 h-8 w-60 m-auto ">
						<option className="text-center" value="none">
							None
						</option>
						<option className="text-center" value="high">
							High
						</option>
						<option className="text-center" value="normal">
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
	);
}

export default Input
