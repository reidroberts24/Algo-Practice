class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let newNode = { data: value, next: this.head };
        this.head = newNode;
        return this.head;
    }

    display() {
        let result = "";
        let runner = this.head;
        while (runner) {
            result += runner.data + (runner.next ? ", " : "");
            runner = runner.next;
        }
        return result;
    }

    // Other methods (removeFront, front) as before
}
let SLL1 = new SLL();
SLL1.addFront(76);
console.log(SLL1.display()); // "76"

SLL1.addFront(2);
console.log(SLL1.display()); // "2, 76"

SLL1.addFront(11.41);
console.log(SLL1.display()); // "11.41, 2, 76"
