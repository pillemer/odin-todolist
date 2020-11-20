import lodash from 'lodash';

const TodoItem = ( title, description, priority, dueDate,group='default' ) => {
    const sayHello = (somethng) => console.log(lodash.capitalize('hello ' +somethng));
    return { title, description, priority, group, dueDate, sayHello };
}

const entry1 = TodoItem('first entry', 'create to do list', 'high', 'tomorrow')
entry1.sayHello(entry1.group);