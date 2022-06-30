export default function onhoverUploadButton(){
    let btn = document.querySelector('.upload_btn');
    let btn_container = document.querySelector('.upload_btn__contained');
    btn.addEventListener('mouseover', function () {
        btn.style.background = "linear-gradient(135deg , lime, rgb(170, 255, 0))";
        btn_container.style.background = '-webkit-linear-gradient(315deg , rgb(34, 34, 34), rgb(88, 88, 88))';
        btn_container.style.webkitBackgroundClip = 'text';
        btn_container.style.webkitTextFillColor = 'transparent';
        btn.style.border = 'solid 2px gray';

    })
    btn.addEventListener('mouseleave', function () {
        btn.style.background = "linear-gradient(135deg , rgb(34, 34, 34), rgb(88, 88, 88))";
        btn_container.style.background = '-webkit-linear-gradient(135deg, rgb(34, 34, 34), rgb(88, 88, 88))';
        btn_container.style.webkitBackgroundClip = 'border-box';
        btn_container.style.webkitTextFillColor = 'currentcolor';
        btn.style.border = 'solid 2px yellowgreen';
    })
}