import React, { useState } from 'react'

const Table = () => {

  interface Data {
    task:string,
    priority:string,
    id:number
  }
  const [data,setData] = useState<Data[]>(JSON.parse(localStorage.getItem("todos")|| "[]" ))

const deleteit = (el:Data) => {
  const id = el.id
  const updated = data.filter((el) => el.id !== id  )
  setData(updated)
  localStorage.setItem("todos",JSON.stringify(updated))
  console.log(updated)
}
  return (
    <div className='border-4 w-[100%] h-130 overflow-y-auto'>
      <table className='w-full h-full  '>
        <thead className='sticky top-0 bg-white ' >
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody> 
          {data.map((el) => (
            <tr key={el.id}>
              <td>{el.task}</td>
              <td>{el.priority}</td>
              <td onClick={()=>deleteit(el)}>Delete</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}

export default Table
