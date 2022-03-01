import React from 'react'

export const BadList = () => {
  return (
                <div className="col-md-6">
                    <h2 className="text-center">Bad List</h2>
                    <hr/>
                    <div className="list-items">
                        <table className="table table-striped">
                            <tbody id="bad-list">
                              
                            </tbody>
                          </table>
                    </div>
                    <div className="ttl-bad text-end text-danger">
                        Total time saved = <span id="totalSaved" >0</span>hrs
                    </div>

                </div>
  )
}
