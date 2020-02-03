// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.className = "todo-item"
    // you will need to use addEventListener

    // add span holding description
    var descriptionNode = document.createElement('span');
    descriptionNode.textContent = todo.description;
    

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.className = "btnDeleteTodo";
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.classList = "btnMarkTodo"+(todo.done ? " done" : "");
    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    // add classes for css

    todoNode.appendChild(descriptionNode);
    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(markButtonNode);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      let inputText = event.target.elements[0];
      if (inputText.value != "") {
        const newTodo = {
          id: todoFunctions.generateId(),
          description: inputText.value,
          done: false,
        }
        const newState = todoFunctions.addTodo(state, newTodo);
        update(newState);

        inputText.value = "";
      }
      
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    todoListNode.id = "todo-list";

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();