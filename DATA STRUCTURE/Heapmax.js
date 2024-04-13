

//   HEAP SORTING



class HeapSort {
    constructor(arr) {    
      this.array = [...arr];
      this.access = this.array.length - 1;
      this.buildHeap();
    }
  
    buildHeap() {
      var parent = this.parent(this.array.length - 1);
      for (let i = parent; i >= 0; i--) {
        this.shiftDown(i);
      }
    }
    shiftDown(parent) { 
      let endIndex = this.access;
    let leftIndex = this.left(parent);
      while (leftIndex <= endIndex) {
        var rightIndex = this.right(parent);
        var shiftIndex = leftIndex;
  
        if (rightIndex <= endIndex) {
          if (this.array[rightIndex] > this.array[leftIndex]) {
            shiftIndex = rightIndex;
          }
        }
        
        if (this.array[parent] < this.array[shiftIndex]) {
          var temp = this.array[parent];
          this.array[parent] = this.array[shiftIndex];  
          this.array[shiftIndex] = temp;
          parent = shiftIndex;
          leftIndex = this.left(parent);
        } else {
          return;
        }
      }
    }
  
    heapSort() {
      let lastElement = this.access;
  
      while (lastElement >= 0) {
        var swap = this.array[lastElement];
        this.array[lastElement] = this.array[0];
        this.array[0] = swap;
  
        lastElement--;
        this.access--;
        this.buildHeap();
      }
    }
  
    display() {
      console.log(this.array);
    }
  
    parent(i) { 
      return Math.floor((i - 1) / 2);
    }
    right(i) {
      return Math.floor(i * 2 + 2);
    }
    left(i) {
      return Math.floor(i * 2 + 1);
    }
  }
  
  var heap = new HeapSort([15, 10, 18, 5, 12, 20, 8]);
  
  heap.heapSort();
  heap.display();

