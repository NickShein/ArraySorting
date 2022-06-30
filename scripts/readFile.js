export default function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        document.querySelector('.card_info').innerHTML = 'Массив з файлу';
        document.getElementById('array_input_ta').value = reader.result;
        
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}