import React, {useState} from 'react'

export const Form = ({addNewTask, ttlHours}) => {

    const weeklyHours = 24 * 7;
    const initialState = {
        task : "",
        hr: ""
    }
    
    const [newTask, setNewTask] = useState(initialState);


    const handleOnChange = e => {
        const {value, name} = e.target;
        setNewTask({
            ...newTask,
            [name] : name === "hr" ? +value : value,
        });
        
    };

    const handleOnSubmit = e => {

      e.preventDefault();
      if(newTask.hr <1){
        return alert("Please enter a valid number of hour")
      }

        if(ttlHours + newTask.hr > weeklyHours) {
          return alert("You Have Reached Maximum Hours");
        }
        
        addNewTask(newTask);
        setNewTask(initialState);
        document.getElementById("inlineFormInputGroupUsername").focus();

    }


  return (
    <div className="row">
    <div className="col">
        <div className="form-box py-5">
            <form 
            onSubmit={handleOnSubmit}
            className="row row-cols-lg-auto g-3 align-items-center d-flex justify-content-center g-3">
                <div className="col-12">
                  <label className="visually-hidden">Your Task</label>
                  <div className="input-group">
                    
                    <input name = "task" type="text"
                     className="form-control" 
                    value = {newTask.task}
                    onChange={handleOnChange}
                    id="inlineFormInputGroupUsername" placeholder="Your Task" required />
                  </div>
                </div>

                <div className="col-12">
                    <label className="visually-hidden">Hours</label>
                    <div className="input-group">
                      
                      <input name = "hr" type="text" className="form-control"
                      value = {newTask.hr}
                      onChange={handleOnChange}
                      id="inlineFormInputGroupUsername" placeholder="Hours" required />
                    </div>
                  </div>
              
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
        </div>
    </div>
</div>
  )
}
