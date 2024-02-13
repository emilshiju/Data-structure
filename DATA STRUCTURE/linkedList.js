// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++

//     }

//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }else{

//             let curr=this.head
//             let listValues=''

//             while(curr){
//                 console.log(curr.value)
//                 listValues+=`${curr.value}`
//                 curr=curr.next

//             }
//             console.log(listValues)
//         }
//     }

// }

// const list =new linkedlist()
// list.prepend(1)
// list.prepend(2)
// list.prepend(3)
// list.prepend(4)

// list.print()

//        Doubly linkedlist

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class doublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const node = new Node(data);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.prev = this.tail;
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   prepend(data) {
//     const node = new Node(data);

//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//   }

//   remove(data) {
//     let current = this.head;

//     while (current) {
//       if (current.data == data) {
//         if (current.prev) {
//           current.prev.next = current.next;
//         } else {
//           current.head = current.next;
//         }
//       }

//       if (current.next) {
//         current.next.prev = current.prev;
//       } else {
//         this.tail = current.prev;
//       }
//       return;
//     }

//     current = current.next;
//   }

//   reverse() {
//     let current = this.head;
//     let temp = null;

//     while (current) {
//       temp = current.prev;
//       current.prev = current.next;
//       current.next = temp;
//       current = current.prev;
//     }

//     // Adjust the head and tail after reversing
//     temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;
//   }

//   printList() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// let list = new doublyLinkedList();
// list.prepend(1);
// list.prepend(2);
// list.prepend(3);
// list.reverse();
// list.printList();

// how convert array into linklist

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinikedList{
//     constructor(value){
//         this.head=null;
//         this.size++;
//     }

//     insertEnd(value){
//         const node=new Node(value)

//         if(!this.head){
//             this.head=node
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }

//     display(){
//      let curr=this.head

//      while(curr){
//       console.log(curr.data)
//       curr=curr.next
//      }
//     }
// }

// function arrayToLinikedList(array){
//     let node=new LinikedList()

//     for(one of array){
//         node.insertEnd(one)
//     }
//     node.insertEnd(738)
//     node.display()
// }
// let array=[1,2,3,4,5,6]

// let show=arrayToLinikedList(array)

// Write a program to remove duplicates in a sorted singly

// class Node {
//   constructor(value) {
//     this.data = value;
//     thid.next = null;
//   }
// }

// class LinikedList {
//   constructor() {
//     this.head = null;
//     this.size++;
//   }

//   insert(value) {
//     let node = new Node(value);
//     if (!thid.head) {
//       this.head = node;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }

//       current.next = node;
//     }
//     this.size++;
//   }

//   removeDuplicate() {
//     let current = this.head;

//     while (current && current.next) {
//       if (current.data === current.next.data) {
//         current.next = current.next.next;
//       }
//       current = current.next;
//     }
//   }

// }



  //  linear search 

// function linearSearch(a,b){
    
//     for(let i=0;i<a.length;i++){
//         if(a[i]==b){
//             return i
//         }
//     }
//     return -1
// }


// let ans=linearSearch([1,2,3,4],4)
// console.log(ans)



// Binary Search 

// function binarysearch(a,b){
//     let f=0;
//     let l=a.length-1;
    
//     while(f<=l){

//         let mid=Math.floor((f+l)/2);

//         if(a[mid]===b){
//             return mid
//         }else if(a[mid]<b){
//             f=mid+1
//         }else{
//             l=mid-1
//         }
//     }
//     return -1
// }

// let ans=binarysearch([1,2,3,4],30)
// console.log(ans)


