import React from 'react'

export const TotalHours = () => {
  return (
    <div className="row mt-5 pb-1 mb-2 fs-3 fw-bolder text-success bg-light">
    <div className="col text-center">
        Total time allocated this week = <span id="totalHours">0</span>hrs
    </div>
    </div>
  )
}
