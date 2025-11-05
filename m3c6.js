class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const head = new Node(10);
head.next = new Node(16);
head.next.next = new Node(18);
console.log(head)

let temp = head;

while(temp !== null){
    console.log(temp.value)
    temp=temp.next;
}
