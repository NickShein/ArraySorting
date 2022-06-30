import make_elements_span from "./scripts/result_section_makeESpan.js";
import sortbar_percentage_visible from "./scripts/sortbar_percentage.js";
import {smoothScroll, scrollWndw} from "./scripts/betterScroll.js";
import { sort_funcs_names, sort_funcs_times, sort_funcs_time, mergesort_iteration, mergesort_last_el, mergesort_timestart, mergesort_timeend, quicksort_iteration, quicksort_last_el, quicksort_timestart, quicksort_timeend, bubbleSort, cocktailSort, combSort, insertionSort, selectionSort, quickSort, quicksort_sortcard_view, mergeSort, mergesort_sortcard_view, heapSort, shellSort, timSort, bucketSort, modifiedBubbleSort} from "./scripts/sortingFunctions.js";
import isTAValid from "./scripts/isTAreaValid.js";
import notification_expire from "./scripts/notification_expire.js";
import animateProgressBar from "./scripts/pageProgress.js";
import displayResultInfo from "./scripts/displayResultInfo.js";
import resultLineConfiguring from "./scripts/resultLineConfiguring.js";
import sortingMethodsExecution from './scripts/sortingMethodsExecution.js';
import outputArray from './scripts/outputArray.js';
import copyToClipboard from './scripts/copy.js';
import onhoverUploadButton from './scripts/onhoverUploadButton.js';
import onhoverTipmenu from './scripts/onhoverTipmenu.js';
import downloadSortedArray from './scripts/downloadSortedArray.js';
import readFile from './scripts/readFile.js';
import isEmptyTArea from './scripts/isEmptyTArea.js';
import sortsObserve from './scripts/sortsObserve.js';
import modifySortsButtons from './scripts/modifySortsButtons.js';
import mainObserve from './scripts/mainObserve.js';
import onloadFileChange from './scripts/onloadFIleChange.js';
import reload from './scripts/reload.js';
import settingsPopup from './scripts/settingsPopup.js';
import headerShrink from './scripts/headerShrink.js';


//Onload website the position always at the begining
document.body.onload = () => {
    setTimeout(()=>{
        window.scrollTo(0, 0);
    },10);
}

//usage of imported funcs
make_elements_span();
sortbar_percentage_visible();
smoothScroll();
animateProgressBar();
onhoverUploadButton();
onhoverTipmenu();
sortsObserve();
modifySortsButtons();
mainObserve();
onloadFileChange();
reload();
settingsPopup();
headerShrink();

//global variables
let array_to_copy;
let copyToClipboard_usage = 0;

//confirming file input
document.querySelector('.upload_btn__contained').addEventListener('click', () => {
    document.getElementById('file').onchange = readFile(document.getElementById("file"));
    isEmptyTArea();
});

// getting info from textarea
document.querySelector('.confirm_data_btn').addEventListener('click', () => {
    let input_tarea = document.querySelector('.array_input_tarea');
    if ( isTAValid() ){
        scrollWndw(); //scrolling to sortcards
        let data = input_tarea.value;
        let data_array = data.split(',').map(Number);
        let fastest_function;
        setTimeout(bubbleSort(data_array.slice()), 0);
        setTimeout(cocktailSort(data_array.slice()), 0);
        setTimeout(combSort(data_array.slice()), 0);
        setTimeout(insertionSort(data_array.slice()), 0);
        setTimeout(selectionSort(data_array.slice()), 0);
        quicksort_sortcard_view(); // quicksort sortcard showout
        mergesort_sortcard_view(); // mergesort sortcard showout
        setTimeout(heapSort(data_array.slice()), 0);
        setTimeout(shellSort(data_array.slice()), 0);
        setTimeout(timSort(data_array.slice()), 0);
        setTimeout(bucketSort(data_array.slice()), 0);
        setTimeout(modifiedBubbleSort(data_array.slice()), 0);
        displayResultInfo(sort_funcs_names[sort_funcs_time.indexOf(Math.min(...sort_funcs_time))]);
        resultLineConfiguring();
        let title = document.querySelector('.result_typesort_header');
        if (title.length > 53) {
            title.style.fontSize = "12px";
        }
        sortingMethodsExecution(sort_funcs_times);
        array_to_copy = outputArray(data_array.slice());
        document.getElementById('dwnld_array').addEventListener("click", () => {
            downloadSortedArray(array_to_copy);
        });
    }
    else{
        document.querySelector('.notify-warning').style.display = 'block';
        notification_expire();
    }
})
document.querySelector('.copy_data_btn').addEventListener('click', () => {
    copyToClipboard(array_to_copy, copyToClipboard_usage);
    copyToClipboard_usage++;
})