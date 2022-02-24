const { v4: uuidv4 } = require('uuid')

class Todo {
  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.completed = null;
  }
}

module.exports = Todo;