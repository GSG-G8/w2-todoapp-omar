const todoFunctions = require('./logic.js');

//////////////////// addTodo \\\\\\\\\\\\\\\\\\\\
test('addTodo() should return a new array with the new todo', function () {
  let todos = [{id:1, b:"1"}];
  let actual = todoFunctions.addTodo(todos, {id:2, b:"2"});
  let expected = [{id:1, b:"1"}, {id:2, b:"2"}];
  
  expect(actual).toEqual(expected);
});

//////////////////// deleteTodo \\\\\\\\\\\\\\\\\\\\
test('deleteTodo() should return a new array without the target todo', function () {
  let todos = [{id:1, b:"1"}, {id:2, b:"2"}];
  let actual = todoFunctions.deleteTodo(todos, 1);
  let expected = [{id:2, b:"2"}];
  
  expect(actual).toEqual(expected);
});

//////////////////// markTodo \\\\\\\\\\\\\\\\\\\\
test('markTodo() should toggle between done and not done', function () {
  let todos1 = [{id:1, description:"test", done:false}];
  let actual1 = todoFunctions.markTodo(todos1, 1);
  let expected1 = [{id:1, description:"test", done:true}];
  expect(actual1).toEqual(expected1);

  let todos2 = [{id:2, description:"test", done:true}];
  let actual2 = todoFunctions.markTodo(todos2, 2);
  let expected2 = [{id:2, description:"test", done:false}];
  expect(actual2).toEqual(expected2);
});