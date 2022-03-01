import React from 'react'

export const BadList = ({badList, handleOnDeleteBadList, markAsToDo, savedHours}) => {
  return (
                <div className="col-md-6">
                    <h2 className="text-center">Bad List</h2>
                    <hr/>
                    <div className="list-items">
                        <table className="table table-striped">
                            <tbody id="bad-list">
                            {badList.map((item, i) => {
                               return (
                               <tr key={i}>
                                <td>
                                    <input type="checkbox" name="" id="" />
                                    {item.task}
                                </td>
                                <td>{item.hr}hr</td>
                                <td class="text-end">
                                    
                                    <button class="btn btn-sm btn-warning" onClick= {()=> markAsToDo(i)}> <i class="fas fa-long-arrow-left" title="Mark as Bad List"></i></button>

                                    <button class="btn btn-sm btn-danger" onClick={() => handleOnDeleteBadList(i)} ><i  class="fas fa-trash-alt" title ="Delete"></i></button>
                                </td>
                                </tr>) 
                                

                            })
                            }
                            </tbody>
                          </table>
                    </div>
                    <div className="ttl-bad text-end text-danger">
                        Total time saved = <span id="totalSaved" >{savedHours}</span>hrs
                    </div>

                </div>
  )
}
