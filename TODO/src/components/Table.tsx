import React, { useState } from 'react'

const Table = () => {
  interface Data  {
    task:String;
    priority:String;
    delete:String;
    id:Number;
  }
  const [arr,setArr] = useState<Data[]>([])
  const data : Data = {
      task:"writing",
      priority:"writing",
      delete:"writing",
      id:Date.now()
  }
  const add = () => {
    for(let i=0;i<6;i++){
      setArr([...arr,data])
    }
  }

  console.log(arr)

  return (
    <div className='border-4 w-[100%] h-130 overflow-y-auto'>
      <table className='w-full h-full  '>
        <thead className='sticky top-0 bg-white ' >
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Delete</th>
            <button onClick={add}>add</button>
          </tr>
        </thead>
        <tbody>  
          <>
          {arr.map((el)=>(
            <tr key={el.id}>
              <td>{el.task}</td>
              <td>{el.priority}</td>
              <td>{el.delete}</td>
            </tr>
          ))}
          </>
        </tbody>
      </table>
    </div>
  )
}

export default Table
