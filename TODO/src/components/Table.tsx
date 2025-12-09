import React from 'react'

const Table = () => {
  
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
        </tbody>
      </table>
    </div>
  )
}

export default Table
