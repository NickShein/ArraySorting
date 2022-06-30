//vars for finding the fastest sortfunc
export let sort_funcs_time = [];
export let sort_funcs_times = {};
export let sort_funcs_names = ['сортування бульбашкою', 'перемішування', 'сортування гребінцем', 'сортування вставками', 'сортування вибором', 'швидке сортування', 'злиття', 'пірамідальність', 'сортування шелла', 'командне сортування', 'сортування комірками', 'модифікація бульбашки'];
//mergesort vars
export let mergesort_iteration = 0;
export let mergesort_last_el = 0;
export let mergesort_timestart, mergesort_timeend;

//quicksort vars
export let quicksort_iteration = 0;
export let quicksort_last_el = 0;
export let quicksort_timestart, quicksort_timeend;

let is_notify_closed = true;

function endedSortingChecker(time_arr) {
  if (time_arr = 11 && is_notify_closed == true) {
    let expire_time = Math.max(...sort_funcs_time);
    setTimeout(() => {
      document.querySelector('.notify-sucsess').style.display = 'block';
      is_notify_closed = false;
      setTimeout(() => {
        document.querySelector('.notify-sucsess').style.display = 'none';
        is_notify_closed = true;
        document.querySelector('.notify-sucsess').style.overflowX = 'visible';
        document.querySelector('.notify-sucsess').style.width = '32%';
      }, 6000);
      setTimeout(() => {
        document.querySelector('.notify-sucsess').style.overflowX = 'hidden';
        document.querySelector('.notify-sucsess').style.width = '0px';
      }, 5000);
      document.getElementById('btn_sucs').onclick = () => {
        document.querySelector('.notify-sucsess').style.display = 'none';
        is_notify_closed = true;
      }
    }, expire_time - 1600);
  }
}

// Bubble sort
export function bubbleSort(inputArr) {
  let time_start = Date.now();
  let len = inputArr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;
  for (let i = 0; i < len; i++) {
    iteration++;
    for (let j = 0; j < len; j++) {
      iteration++;
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
        last_item = tmp;
      }
    }
  }
  time_end = Date.now() - time_start;
  sort_funcs_times['сортування бульбашкою'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.bubblesort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.bubblesort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }
  //bubblesort info
  setTimeout(() => {
    document.querySelector('.fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.bubblesort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.bubblesort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.bubblesort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.bubblesort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.bubblesort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.bubblesort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);

  return inputArr;
};

// Shaker sort
export function cocktailSort(arr) {
  //percentage vars
  let time_start = Date.now();
  let len = arr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;

  let start = 0, end = len, swapped = true;
  //sorting cycle
  while (swapped) {
    swapped = false;
    for (let i = start; i < end - 1; i++, iteration++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        last_item = temp;
        swapped = true;
      }
    }

    end--;
    if (!swapped)
      break;

    swapped = false;
    for (let i = end - 1; i > start; i--, iteration++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
        last_item = temp;
      }
    }

    start++;
  }
  time_end = Date.now() - time_start;
  sort_funcs_times['перемішування'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.shake_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.shake_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }

  //shakersort info
  setTimeout(() => {
    document.querySelector('.shake_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.shake_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.shake_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.shake_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.shake_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.shake_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.shake_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.shake_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);
  return arr;
}

// Comb sort
export function combSort(arr) {
  //percentage vars
  let time_start = Date.now();
  let len = arr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;

  const l = arr.length;
  const factor = 1.247;
  let gapFactor = l / factor;
  while (gapFactor > 1) {
    iteration++;
    const gap = Math.round(gapFactor);
    for (let i = 0, j = gap; j < l; i++, j++) {
      iteration++;
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      last_item = arr[i];
    }
    gapFactor = gapFactor / factor;
  }
  time_end = Date.now() - time_start;
  sort_funcs_times['сортування гребінцем'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.combsort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.combsort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }

  //combsort info
  setTimeout(() => {
    document.querySelector('.combsort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.combsort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.combsort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.combsort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.combsort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.combsort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.combsort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.combsort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);
  return arr;
};

// Insertion sort
export function insertionSort(arr) {
  //percentage vars
  let time_start = Date.now();
  let len = arr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;

  for (let i = 1, l = arr.length; i < l; i++) {
    iteration++;
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
      iteration++;
    }
    arr[j] = current;
    last_item = current;
  }
  time_end = Date.now() - time_start;
  sort_funcs_times['сортування вставками'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.insertion_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.insertion_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }

  //insertionsort info
  setTimeout(() => {
    document.querySelector('.insertion_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.insertion_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.insertion_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.insertion_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.insertion_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.insertion_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.insertion_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.insertion_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);
  return arr;
};

// Selection sort
export function selectionSort(arr) {
  //percentage vars
  let time_start = Date.now();
  let len = arr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;

  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;
    iteration++;
    for (let j = i + 1; j < l; j++) {
      iteration++;
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
      last_item = arr[i];
    }
  }
  time_end = Date.now() - time_start;
  sort_funcs_times['сортування вибором'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.selection_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.selection_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }

  //selectionsort info
  setTimeout(() => {
    document.querySelector('.selection_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.selection_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.selection_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.selection_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.selection_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.selection_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.selection_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.selection_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);
  return arr;
};

// Quick sort
export function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
  quicksort_iteration++;

  for (let i = 1; i < arr.length; i++) {
    quicksort_iteration++;
    if (pivot > arr[i]) {
      left.push(arr[i]);
      quicksort_last_el = left[left.length - 1];
    } else {
      right.push(arr[i]);
      quicksort_last_el = right[right.length - 1];
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

//FUNCTION FOR SHOW OUT QUICKSORT CARD VALUES
export function quicksort_sortcard_view() {
  let data_quicksort = document.querySelector('.array_input_tarea').value;
  let data_array_quicksort = data_quicksort.split(',').map(Number);
  //percentage vars
  const quicksort_percentage_step = (1 / data_array_quicksort.length) * 100;
  let quicksort_percentage = quicksort_percentage_step;

  quicksort_timestart = Date.now();
  setTimeout(quickSort(data_array_quicksort.slice()), 0);
  quicksort_timeend = Date.now() - quicksort_timestart;
  sort_funcs_times['швидке сортування'] = quicksort_timeend;
  sort_funcs_time.push(quicksort_timeend * 10);
  endedSortingChecker(sort_funcs_time.length);
  let quicksort_load_time = quicksort_timeend / data_array_quicksort.length;

  for (let i = 0; i < data_array_quicksort.length; i++) {
    setTimeout(() => {
      document.querySelector('.quick_sort .sortbar_text').innerHTML = quicksort_percentage.toFixed(2) + '%';
      document.querySelector('.quick_sort .sort_load_bar').style.width = quicksort_percentage + '%';
      quicksort_percentage += quicksort_percentage_step;
    }, (i * 5 * quicksort_load_time))
  }


  //quicksort info
  setTimeout(() => {
    document.querySelector('.quick_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.quick_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.quick_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.quick_sort .sort_analysis_time .sa_value').innerHTML = quicksort_timeend + ' мс';
    document.querySelector('.quick_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.quick_sort .sort_analysis_iteration .sa_value').innerHTML = quicksort_iteration;
    document.querySelector('.quick_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.quick_sort .sort_analysis_last_item .sa_value').innerHTML = quicksort_last_el;
  }, quicksort_timeend);
}

//  Merge sort
function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays 
    mergesort_iteration++;
    if (left[0] < right[0]) {
      arr.push(left.shift())

    } else {
      arr.push(right.shift())
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  mergesort_last_el = arr[arr.length - 1];
  return [...arr, ...left, ...right]
}

export function mergeSort(array) {
  const half = array.length / 2

  // Base case or terminating case
  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array))
}

//FUNCTION FOR SHOW OUT MERGESORT CARD VALUES
export function mergesort_sortcard_view() {
  //percentage vars
  let data_mergesort = document.querySelector('.array_input_tarea').value;
  let data_array_mergesort = data_mergesort.split(',').map(Number);
  //percentage vars
  const mergesort_percentage_step = (1 / data_array_mergesort.length) * 100;
  let mergesort_percentage = mergesort_percentage_step;

  //sorting fync
  mergesort_timestart = Date.now();
  setTimeout(mergeSort(data_array_mergesort.slice()), 0);
  mergesort_timeend = Date.now() - mergesort_timestart;
  sort_funcs_times['злиття'] = mergesort_timeend;
  sort_funcs_time.push(mergesort_timeend * 10);
  endedSortingChecker(sort_funcs_time.length);

  let mergesort_load_time = mergesort_timeend / data_array_mergesort.length;

  //percentage cycle
  for (let i = 0; i < data_array_mergesort.length; i++) {
    setTimeout(() => {
      document.querySelector('.merge_sort .sortbar_text').innerHTML = mergesort_percentage.toFixed(2) + '%';
      document.querySelector('.merge_sort .sort_load_bar').style.width = mergesort_percentage + '%';
      mergesort_percentage += mergesort_percentage_step;
    }, (i * 5 * mergesort_load_time))
  }


  //mergesort info
  setTimeout(() => {
    document.querySelector('.merge_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.merge_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.merge_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.merge_sort .sort_analysis_time .sa_value').innerHTML = mergesort_timeend + ' мс';
    document.querySelector('.merge_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.merge_sort .sort_analysis_iteration .sa_value').innerHTML = mergesort_iteration;
    document.querySelector('.merge_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.merge_sort .sort_analysis_last_item .sa_value').innerHTML = mergesort_last_el;
  }, mergesort_timeend);
}

//classes and funcs for heapsort function
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return (2 * index + 1);
  }

  rightChildIndex(index) {
    return (2 * index + 2);
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item) {
    this.heap.push(item);
    var index = this.heap.length - 1;
    var parent = this.parentIndex(index);
    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    var item = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    var index = 0;
    var leftChild = this.leftChildIndex(index);
    var rightChild = this.rightChildIndex(index);
    while (this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]) {
      var max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return item;
  }
}
// Heap sort 
export function heapSort(arr) {
  //percentage vars
  let time_start = Date.now();
  let len = arr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;

  var sorted = [];
  var heap1 = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    iteration++;
    heap1.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    iteration++;
    sorted.push(heap1.delete());
    last_item = sorted[sorted.length - 1];
  }

  time_end = Date.now() - time_start;
  sort_funcs_times['пірамідальність'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.pyramidal_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.pyramidal_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time));
  }

  //pyramidalsort info
  setTimeout(() => {
    document.querySelector('.pyramidal_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.pyramidal_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.pyramidal_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.pyramidal_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.pyramidal_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.pyramidal_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.pyramidal_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.pyramidal_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);
  return sorted;
}

export function shellSort(inputArr) {
  let time_start = Date.now();
  let len = inputArr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;
  let n = inputArr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      iteration++;
      let temp = inputArr[i];

      let j;
      for (j = i; j >= gap && inputArr[j - gap] > temp; j -= gap) {
        inputArr[j] = inputArr[j - gap];
      }

      inputArr[j] = temp;
      last_item = temp;
    }
  }
  time_end = Date.now() - time_start;
  sort_funcs_times['сортування шелла'] = time_end;

  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.shell_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.shell_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }
  //shellsort info
  setTimeout(() => {
    document.querySelector('.shell_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.shell_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.shell_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.shell_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.shell_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.shell_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.shell_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.shell_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);

  return inputArr;
}

export function timSort(inputArr) {
  let time_start = Date.now();
  let minRunLength_time, inSOrt_start = 0, mrg_start = 0, inSOrt_end = 0, mrg_end = 0;
  let len = inputArr.length;
  let n = len;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;
  let MIN_MERGE = 32;

  function minRunLength(n) {
    minRunLength_time = Date.now();
    // Becomes 1 if any 1 bits are shifted off
    let r = 0;
    while (n >= MIN_MERGE) {
      r |= (n & 1);
      n >>= 1;
    }
    minRunLength_time = Date.now() - minRunLength_time;
    return n + r;
  }

  // This function sorts array from left index to
  // to right index which is of size atmost RUN
  function inSOrt(inputArr, left, right) {
    inSOrt_start += Date.now();
    for (let i = left + 1; i <= right; i++) {
      let temp = inputArr[i];
      let j = i - 1;

      while (j >= left && inputArr[j] > temp) {
        inputArr[j + 1] = inputArr[j];
        j--;
      }
      inputArr[j + 1] = temp;
    }
    inSOrt_end += Date.now();
  }

  // Merge function merges the sorted runs
  function mrg(inputArr, l, m, r) {
    mrg_start += Date.now();
    // Original array is broken in two parts
    // left and right array
    let len1 = m - l + 1, len2 = r - m;
    let left = new Array(len1);
    let right = new Array(len2);
    for (let x = 0; x < len1; x++) {
      left[x] = inputArr[l + x];
    }
    for (let x = 0; x < len2; x++) {
      right[x] = inputArr[m + 1 + x];
    }

    let i = 0;
    let j = 0;
    let k = l;

    // After comparing, we merge those two
    // array in larger sub array
    while (i < len1 && j < len2) {
      if (left[i] <= right[j]) {
        inputArr[k] = left[i];
        i++;
      }
      else {
        inputArr[k] = right[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements
    // of left, if any
    while (i < len1) {
      last_item = left[i];
      inputArr[k] = left[i];
      k++;
      i++;
    }

    // Copy remaining element
    // of right, if any
    while (j < len2) {
      inputArr[k] = right[j];
      k++;
      j++;
    }
    mrg_end += Date.now();
  }

  let minRun = minRunLength(MIN_MERGE);

  // Sort individual subarrays of size RUN
  for (let i = 0; i < n; i += minRun) {
    iteration++;
    inSOrt(inputArr, i, Math.min(
      (i + MIN_MERGE - 1), (n - 1)));
  }

  // Start merging from size
  // RUN (or 32). It will
  // merge to form size 64,
  // then 128, 256 and so on
  // ....
  for (let size = minRun; size < n; size = 2 * size) {
    iteration++;

    // Pick starting point
    // of left sub array. We
    // are going to merge
    // arr[left..left+size-1]
    // and arr[left+size, left+2*size-1]
    // After every merge, we
    // increase left by 2*size
    for (let left = 0; left < n;
      left += 2 * size) {
      iteration++;

      // Find ending point of left sub array
      // mid+1 is starting point of right sub
      // array
      let mid = left + size - 1;
      let right = Math.min((left + 2 * size - 1),
        (n - 1));

      // Merge sub array arr[left.....mid] &
      // arr[mid+1....right]
      if (mid < right)
        mrg(inputArr, left, mid, right);
    }
  }
  time_end = Date.now() - time_start;


  sort_funcs_times['командне сортування'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.team_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.team_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }
  //teamsort info
  setTimeout(() => {
    document.querySelector('.team_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.team_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.team_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.team_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.team_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.team_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.team_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.team_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);


  return inputArr;
}

export function bucketSort(inputArr) {
  let time_start = Date.now();
  let len = inputArr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;


  const insertion = arr => {
    let length = arr.length;
    let i, j;
    for (i = 1; i < length; i++) {
      let temp = arr[i];
      for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
        iteration++;
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
      last_item = temp;
    }
    return arr;
  };


  if (inputArr.length === 0) {
    return inputArr;
  }
  let i,
    minValue = inputArr[0],
    maxValue = inputArr[0],
    bucketSize = 5;
  inputArr.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  })
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
    iteration++;
  }
  inputArr.forEach(function (currentVal) {
    iteration++;
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });
  inputArr.length = 0;
  allBuckets.forEach(function (bucket) {
    insertion(bucket);
    bucket.forEach(function (element) {
      iteration++;
      inputArr.push(element)
    });
  });

  time_end = Date.now() - time_start;
  sort_funcs_times['сортування комірками'] = time_end;
  sort_funcs_time.push(time_end * 10);
  endedSortingChecker(sort_funcs_time.length);
  let load_time = time_end / len;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      document.querySelector('.bucket_sort .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
      document.querySelector('.bucket_sort .sort_load_bar').style.width = percentage + '%';
      percentage += percentage_step;
    }, (i * 5 * load_time))
  }
  //bucketsort info
  setTimeout(() => {
    document.querySelector('.bucket_sort .fields').style.display = 'flex';
    let bbottom_el = document.querySelectorAll('.bucket_sort .sa_badge');
    let ind = 0, length = bbottom_el.length;
    for (; ind < length; ind++) {
      bbottom_el[ind].style.borderBottom = 'solid 1px orange';
    }
    document.querySelector('.bucket_sort .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
    document.querySelector('.bucket_sort .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
    document.querySelector('.bucket_sort .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
    document.querySelector('.bucket_sort .sort_analysis_iteration .sa_value').innerHTML = iteration;
    document.querySelector('.bucket_sort .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
    document.querySelector('.bucket_sort .sort_analysis_last_item .sa_value').innerHTML = last_item;
  }, time_end);


  return inputArr;
}

export function modifiedBubbleSort(inputArr) {
  let time_start = Date.now();
  let len = inputArr.length;
  let time_end, iteration = 0, last_item;
  const percentage_step = (1 / len) * 100;
  let percentage = percentage_step;
  let isSwapped = false;

  for (let i = 0; i < inputArr.length; i++) {
    iteration++;
    for (let j = 0; j < inputArr.length - i; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        iteration++;
        isSwapped = true;
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
        last_item = tmp;
      }
    }
    if (!isSwapped) {
      time_end = Date.now() - time_start;
      sort_funcs_times['модифікація бульбашки'] = time_end;
      sort_funcs_time.push(time_end * 10);
      endedSortingChecker(sort_funcs_time.length);
      let load_time = time_end / len;
      for (let i = 0; i < len; i++) {
        setTimeout(() => {
          document.querySelector('.modified_bubbl .sortbar_text').innerHTML = percentage.toFixed(2) + '%';
          document.querySelector('.modified_bubbl .sort_load_bar').style.width = percentage + '%';
          percentage += percentage_step;
        }, (i * 5 * load_time))
      }
      //bubblesort info
      setTimeout(() => {
        document.querySelector('.modified_bubbl .fields').style.display = 'flex';
        let bbottom_el = document.querySelectorAll('.modified_bubbl .sa_badge');
        let ind = 0, length = bbottom_el.length;
        for (; ind < length; ind++) {
          bbottom_el[ind].style.borderBottom = 'solid 1px orange';
        }
        document.querySelector('.modified_bubbl .sort_analysis_time .sa_name').innerHTML = 'Час сортування: ';
        document.querySelector('.modified_bubbl .sort_analysis_time .sa_value').innerHTML = time_end + ' мс';
        document.querySelector('.modified_bubbl .sort_analysis_iteration .sa_name').innerHTML = 'Ітерацій у циклах: ';
        document.querySelector('.modified_bubbl .sort_analysis_iteration .sa_value').innerHTML = iteration;
        document.querySelector('.modified_bubbl .sort_analysis_last_item .sa_name').innerHTML = 'Остатній зсунутий елемент: ';
        document.querySelector('.modified_bubbl .sort_analysis_last_item .sa_value').innerHTML = last_item;
      }, time_end);

      return inputArr;
    } else {
      isSwapped = false;
    }
  }
}