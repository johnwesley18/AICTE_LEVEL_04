const todoList = () => {
    let all = [];
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };
  
    var dateToday = new Date();
    const today = formattedDate(dateToday);
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
        // FILL YOUR CODE HERE
      let overdue_list = all.filter((item) => item.dueDate < today);
      return overdue_list;
    };
  
    const dueToday = () => {
       // Write the date check condition here and return the array of todo items that are due today accordingly.
        // FILL YOUR CODE HERE
      let dueToday_list = all.filter((item) => item.dueDate === today);
      return dueToday_list;
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
        // FILL YOUR CODE HERE
      let dueLater_list = all.filter((item) => item.dueDate > today);
      return dueLater_list;
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
        // FILL YOUR CODE HERE
  
      let display_list = list.map((item) => {
        let completionStatus = item.completed ? "[x]" : "[ ]";
        let displayedDate = item.dueDate === today ? "" : item.dueDate;
        return `${completionStatus} ${item.title} ${displayedDate}`.trim();
      });
      let output_string = display_list.join("\n");
      return output_string;
    };
  
    return {all,add,markAsComplete,overdue,dueToday,dueLater,toDisplayableList,
    };
  };
  
  module.exports = todoList;
  