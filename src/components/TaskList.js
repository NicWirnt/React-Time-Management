import React, { useState } from 'react'

export const TaskList = ({taskList}) => {
 
  const [dItem, setDItem] = useState();

  const deleteItem = (val) =>{
    console.log(val)
  }
  
  console.log(taskList)
  return (
                <div className="col-md-6 mb-5">
                    <h2 className="text-center ">Task List</h2>
                    <hr/>
                    <div className="list-items">
                        <table className="table table-striped">
                            <tbody id="task-list">
                            
                            {taskList.map((item, i) => {
                               return (
                               <tr>
                                <td>
                                    <input type="checkbox" name="" id="" />
                                    {item.task}
                                </td>
                                <td>{item.hr}hr</td>
                                <td class="text-end">
                                    <button class="btn btn-sm btn-danger" onClick= ""><i  class="fas fa-trash-alt" title ="Delete"></i></button>
                                    <button class="btn btn-sm btn-warning" onClick="moveItem(${i})"><i class="fas fa-long-arrow-right" title="Mark as Bad List"></i></button>
                                </td>
                                </tr>) 
                                

                            })
                            }
                            </tbody>
                          </table>
                    </div>
                   

                </div>
  )
}
