import './App.css'
import Input from './components/Input';
import Table from './components/Table';
function App() {
	
  
	

  return (
		<>
			<h1 className="text-[#000000] font-bold text-center text-3xl sm:text-5xl my-5">
				TODO APP
			</h1>
			<div className="border- grid lg:grid-cols-2 w-[96%] m-auto h-250 lg:h-150 justify-center px-25 items-center shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
				<Input />
				{/* <Table/> */}
			</div>
		</>
	);
}

export default App
