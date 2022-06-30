import onhoverTipmenu from "./onhoverTipmenu.js";
export default function isEmptyTArea(){
    let tarea = document.querySelector('.array_input_tarea');
    tarea.addEventListener('input', hideOnEmpty);
    function hideOnEmpty() {
        var text = tarea.value;
        if (text == ''){
            document.querySelector('.card_info').innerHTML = 'Заповнення вручну <span class="card_info__tip">?</span>';
            onhoverTipmenu();
        }
    }
}