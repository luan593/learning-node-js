const Todo = require('./todo');

class Todos {
  constructor() {
    _list = {};
  }

  crearTarea(description) {
    const tarea = new Todo(description);
    this._list[tarea.id] = tarea;
  }
}

module.exports = Todos;