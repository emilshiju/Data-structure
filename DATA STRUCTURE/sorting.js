

//   Bubble sorting




function bubbleSorting(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let arr = [3, 2, 14, 6, 7, 8, 3, 1];

bubbleSorting(arr);



//  insertion sorting




function insertionSorting(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    let j = i - 1;

    while (array[j] && array[j] > current) {
      array[j + 1] = array[j];

      j--;
    }

    array[j + 1] = current;
  }
}

let array = [32, 31, 3, 4, 54, 6, 547, 56, 867, 891, 0];

insertionSorting(array);



// QuickSorting



function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

let array1 = [3, 4, 1, 5, 465, 76, 0];
let len = array1.length;
quickSort(array1, 0, len - 1);




//   merge sorting



let b = [];
function merge(a, lb, mid, ub) {
  let i = lb;
  let j = mid + 1;
  let k = lb;
  while (i <= mid && j <= ub) {
    if (a[i] <= a[j]) {
      i++;
      b[k] = a[i];
    } else {
      j++;
      b[k] = a[j];
    }
    k++;
  }
  if (i > mid) {
    while (j <= ub) {
      b[k] = a[j];
      k++;
      j++;
    }
  } else {
    while (i <= mid) {
      b[k] = a[i];
      k++;
      i++;
    }
  }
}

function mergeSort(a, lb, ub) {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    mergeSort(a, lb, mid);
    mergeSort(a, mid + 1, ub);
    merge(a, lb, mid, ub);
  }
}
