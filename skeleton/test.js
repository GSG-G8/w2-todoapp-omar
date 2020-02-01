const todoFunctions = require('./logic.js');

test('addTodo() should return a new array with the new todo', function () {
  let actual = todoFunctions.addTodo([{id:1, b:"1"}],{id:2, b:"2"});
  let expected = [{id:1, b:"1"}, {id:2, b:"2"}];
  
  expect(actual).toEqual(expected);
});

test('deleteTodo() should return a new array without the target todo', function () {
  let todos = [{id:1, b:"1"}, {id:2, b:"2"}];
  let actual = todoFunctions.deleteTodo(todos, 1);
  let expected = [{id:2, b:"2"}];
  
  expect(actual).toEqual(expected);
});