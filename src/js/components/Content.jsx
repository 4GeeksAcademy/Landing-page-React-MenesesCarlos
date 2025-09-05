import React from 'react'

function Content() {
  return (
    <div>
    <header>
      <div className="container header-content ">
        <div className="p-3 mb-4 bg-light rounded-3 shadow-sm">
          <div className="container-fluid ">
            <h1 className="text-start p-0">A Warm Welcome!</h1>
            <p className="fs-6 text-justify py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsum, eligendi, 
              in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis 
              illo aspernatur vitae fugiat numquam repellat.
            </p>
            <div className="text-start py-1">
                 <button className="btn btn-primary btn-md ">Call to action!</button>
            </div>
           
          </div>
        </div>
      </div>
       </header>
    </div>
  )
}

export default Content