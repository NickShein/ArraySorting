//sortbartext setting to 0% val
export default function sortbar_percentage_visible(){
    let sb_text = document.querySelectorAll('.sortbar_text');
    let sb_loadbar = document.querySelectorAll('.sort_load_bar');
    for (let i = 0; i < 12; i++) {
        sb_text[i].innerHTML = '0%';
        sb_loadbar[i].style.width = '0%';
    }
}