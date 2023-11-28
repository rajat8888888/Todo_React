import React from 'react'

export const DeleteTodo= ({props}) => {
    console.log(props);
  return (
    <div>
   <div class="container text-center">
     
     <div class="row kg-row">
    <div class="col-6">
    { props}
    </div>
    <div class="col-4">
       04/10/2022
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button" >Delete</button>
    </div>
  </div>
  </div>
    </div>
  )
}
