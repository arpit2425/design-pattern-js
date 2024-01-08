/*
Real world example

Take the example of calculator (i.e. originator), where whenever you perform some calculation the last calculation is saved in memory (i.e. memento) so that you can get back to it and maybe get it restored using some action buttons (i.e. caretaker).
*/
/*
In plain words
Memento pattern is about capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.
Usually useful when you need to provide some sort of undo functionality.
*/

class EditorMomento {
  #content;
  constructor(content) {
    this.#content = content;
  }
  getContent() {
    return this.#content;
  }
}
class Editor {
  #content;
  constructor() {
    this.#content = '';
  }
  type(content) {
    this.#content += content;
  }
  getContent() {
    return this.#content;
  }
  save() {
    return new EditorMomento(this.#content);
  }
  restore(memento) {
    this.#content = memento.getContent();
  }
}
const editor = new Editor();
editor.type('This is a first sentence. ');
editor.type('This is a second sentence. ');
const state = editor.save();
editor.type('This is a third sentence. ');
console.log(editor.getContent()); //This is a first sentence. This is a second sentence. This is a third sentence.
editor.restore(state);
console.log(editor.getContent()); //This is a first sentence. This is a second sentence.
