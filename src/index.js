import lodash from 'lodash';
import format from 'date-fns';

// change for visual verificaton of update
console.log('trying...1');

class ListItem {
    constrcutor(title) {
        this.title = title;
        this.complete = false;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }

    isDone() {
        let done = ''
        if (this.complete){
            done = 'Done';
        } else {  done = 'Not Done'}
        console.log(`${this.title} is ${done}`)
    }
}

let item1 = new ListItem('first time')
console.log(item1)

item1.isDone()
console.log('toggling..')
item1.toggleComplete()
item1.isDone()
