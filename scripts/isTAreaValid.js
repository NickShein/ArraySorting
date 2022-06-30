export default function isTAValid(){
    let checking_zone = document.querySelector('.array_input_tarea').value;
    let valid_letters = [' ', ',', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let i = 1;
    if (checking_zone.length < 1){
        return false;
    }
    for (; i < checking_zone.length - 1; i++){
        if (valid_letters.indexOf(checking_zone[i]) == -1){
            return false
        }
    }

    return true;
}