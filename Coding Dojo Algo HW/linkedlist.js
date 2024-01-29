class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let newNode = { data: value, next: this.head };
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (this.head == null) {
            return null
        };
        this.head = this.head.next;
        return this.head;
    }

    front() {
        if (this.head == null) {
            return null
        };
        return this.head.data;
    }

}
let SLL1 = new SLL();
console.log(SLL1.addFront(18));  
console.log(SLL1.addFront(5));   
console.log(SLL1.addFront(73)); 


console.log(SLL1.removeFront());  
console.log(SLL1.removeFront()); 


console.log(SLL1.front());  
SLL1.removeFront();
console.log(SLL1.front());  
