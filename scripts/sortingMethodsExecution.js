export default function sortingMethodsExecution(obj){
    document.querySelector('.sortname_2.bubble').innerHTML = (obj['сортування бульбашкою'] / 1000).toFixed(1) +'с';
    document.querySelector('.sortname_2.mix').innerHTML =(obj['перемішування'] / 1000).toFixed(1) + 'с';
    document.querySelector('.sortname_2.comb').innerHTML =(obj['сортування гребінцем'] / 1000).toFixed(1) + 'с';
    document.querySelector('.sortname_2.ins').innerHTML =(obj['сортування вставками'] / 1000).toFixed(1) + 'с';
    document.querySelector('.sortname_2.sel').innerHTML =(obj['сортування вибором'] / 1000).toFixed(1) + 'с';
    document.querySelector('.sortname_2.quick').innerHTML =(obj['швидке сортування'] / 1000).toFixed(1) + 'с';
    document.querySelector('.sortname_2.merge').innerHTML =(obj['злиття'] / 1000).toFixed(1) + 'с';
    document.querySelector('.sortname_2.pyram').innerHTML =(obj['пірамідальність'] / 1000).toFixed(1) + 'с';
}