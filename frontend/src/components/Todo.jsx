import React from "react";
import "./todo.css";

const Todo = ()=>{
 
    return(
        <>
      <div className="main_div"> 
          <div className="box_div">
          <br/>
              <h1>Todo List </h1>
            <br />
          <input type="text"  placeholder="Add your work" />
          <button className="add">+</button>

      </div>

      </div>



        </>
    )

}

export default Todo;