export default function resultLineConfiguring() {
    let title = document.querySelector('.description_typesort_header').innerHTML;
    let fastest_func_name = document.querySelector('.fastest_func').innerHTML;
    let string = title.length + fastest_func_name.length;
    if (string > 53) {
        document.querySelector('.result_typesort_header').style.fontSize = "30px";
    }
}