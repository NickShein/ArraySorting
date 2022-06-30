import { sort_funcs_names, sort_funcs_time, bubbleSort, cocktailSort, combSort, insertionSort, selectionSort, quickSort, mergeSort, heapSort, shellSort, timSort, bucketSort, modifiedBubbleSort } from "./sortingFunctions.js";
export default function outputArray(array){
    let sort_functions = {
        'сортування бульбашкою': bubbleSort, 
        'перемішування': cocktailSort,
        'сортування гребінцем': combSort,
        'сортування вставками': insertionSort,
        'сортування вибором': selectionSort,
        'швидке сортування': quickSort,
        'злиття': mergeSort,
        'пірамідальність': heapSort,
        'сортування шелла': shellSort,
        'командне сортування': timSort,
        'сортування комірками': bucketSort,
        'модифікація бульбашки': modifiedBubbleSort,
    }
    let nescessary_method = sort_functions[sort_funcs_names[sort_funcs_time.indexOf(Math.min(...sort_funcs_time))]];
    document.querySelector('#resultOutput').textContent = nescessary_method(array);
    return nescessary_method(array);
}

