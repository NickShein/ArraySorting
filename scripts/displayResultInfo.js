export default function displayResultInfo(fastest_sortfunc){
    document.querySelector('.result_typesort_header').style.textAlign = 'center';
    document.querySelector('.result_typesort_header').innerHTML = '<span class="description_typesort_header">КРАЩИМ МЕТОДОМ СОРТУВАННЯ ПІД ВАШІ ДАНІ Є </span><span class="fastest_func">' + fastest_sortfunc + '</span>';
    document.querySelector('.result_typesort_bestresult_fastfunc').innerHTML = ' ' + fastest_sortfunc;
    if (fastest_sortfunc == 'сортування бульбашкою'){
        fetch('./text articles/bubblesort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'перемішування') {
        fetch('./text articles/cocktailSort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'сортування гребінцем') {
        fetch('./text articles/combsort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'сортування вставками') {
        fetch('./text articles/insertionSort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'сортування вибором') {
        fetch('./text articles/selectionSort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'швидке сортування') {
        fetch('./text articles/quickSort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'злиття') {
        fetch('./text articles/mergeSort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
    else if (fastest_sortfunc == 'пірамідальність') {
        fetch('./text articles/piramidalSort.txt')
            .then(response => response.text())
            .then(text => document.querySelector('.fastest-function-article').innerHTML = text)
    }
}