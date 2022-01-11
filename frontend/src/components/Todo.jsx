import React, { useState } from "react";
import "./todo.css";

const Todo = ()=>{

  const[ inputlist, setinputlist] = useState("")             //change the state of the todo input 
  const[ addlist ,setaddlist ] = useState([])

  const listchange = (event) => {                          
    setinputlist(event.target.value); 
    console.log(setinputlist);   
  }

  const makelist = () =>{
    setaddlist((oldlist) =>{
      return[...oldlist,inputlist];
    });
    setinputlist("");
  };


  // const print = () =>{
  //   alert("hello!")
  // }
    return(
        <>
      <div className="main_div"> 
          <div className="box_div">
          <br/>
          <div className="headerDiv">
          <br />
              <h1>Todo List </h1>
          <br />
          </div>
     <input 
           type="text" 
           placeholder="Add your work"
           value={inputlist}
            onChange={listchange}                        /*state function that is used to add the list */
            autoFocus="on"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false" />
      <button className="add" onClick={makelist}>+</button>
            <div className="content_div">   
              {addlist.map((listval) => {                   //adding all the data inputted in the list in a array and showing in the list place
                return(                                    //returns the data in the list columns
                 <div className="mainContent">
                 <div className="realText">{listval} </div>
                 <div className="task">
                     <i className="far fa-edit"></i>
                     <i className="far fa-trash-alt" ></i>
                </div>
            </div>       
         );
       })}   
      </div>
      </div>

</div>

        </>
    )

}

export default Todo;