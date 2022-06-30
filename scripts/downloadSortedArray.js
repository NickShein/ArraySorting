export default function downloadSortedArray(array){
    let element = document.createElement('a');
    element.style.display = 'none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,'+ encodeURIComponent(array));
    element.setAttribute('download', 'sorted_array.txt');
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}