export default function onhoverTipmenu(){
    let visited = false;
    let tipmenu = document.querySelector('.tip_menu');
    let hint = document.querySelector('.card_info__tip');
    let destroyhint_tipmenu, destroyHint;
    hint.addEventListener("mouseenter", function(event) {
        visited = true;
        let top = window.scrollY;
        tipmenu.style.left =  546 +'px';
        tipmenu.style.top =   370 + 'px';
        clearTimeout(destroyhint_tipmenu);
        tipmenu.style.display = 'block';
        tipmenu.style.opacity = 1;
    });
    tipmenu.addEventListener("mouseenter", function (event) {
        visited = true;
        clearTimeout(destroyHint);
        tipmenu.style.display = 'block';
    });
    tipmenu.addEventListener("mouseleave", function (event) {
        visited = false;
        destroyhint_tipmenu = setTimeout(() => {
            if (visited == true) {
            }
            else {
                setTimeout(() => {
                    tipmenu.style.display = 'none';
                }, 300)
                tipmenu.style.opacity = 0;
            }
        }, 300)
    });
    hint.addEventListener("mouseleave", function (event) {
        visited = false;
        let destroyHint = setTimeout(()=>{
            if(visited == true){
            }
            else{
                setTimeout(()=>{
                    tipmenu.style.display = 'none';
                },300)
                tipmenu.style.opacity = 0;
            }
        }, 500)
    });
}