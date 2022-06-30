export default function mainObserve(){
    const sections = document.querySelectorAll('.main-section');

    const options = {
        root: null,
        threshold: 0.1,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            let input, processing, result, sorts;
            if(!entry.isIntersecting){
                return;
            }
            input = entry.target.classList.contains('input');
            processing = entry.target.classList.contains('processing');
            result = entry.target.classList.contains('result');
            sorts = entry.target.classList.contains('sorts');
            if (input) {
                document.querySelector('.li_1').querySelector('.li_selected').style.width = '100%';
                document.querySelector('.li_1').style.color = 'yellowgreen';
                document.querySelector('.li_2').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_2').style.color = 'white';
                document.querySelector('.li_3').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_3').style.color = 'white';
                document.querySelector('.li_4').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_4').style.color = 'white';
            }
            if (processing) {
                document.querySelector('.li_2').querySelector('.li_selected').style.width = '100%';
                document.querySelector('.li_1').style.color = 'white';
                document.querySelector('.li_1').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_2').style.color = 'yellow';
                document.querySelector('.li_3').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_3').style.color = 'white';
                document.querySelector('.li_4').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_4').style.color = 'white';
            }
            if (result) {
                document.querySelector('.li_3').querySelector('.li_selected').style.width = '100%';
                document.querySelector('.li_1').style.color = 'white';
                document.querySelector('.li_2').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_2').style.color = 'white';
                document.querySelector('.li_1').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_3').style.color = 'orange';
                document.querySelector('.li_4').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_4').style.color = 'white';
            }
            if (sorts) {
                document.querySelector('.li_4').querySelector('.li_selected').style.width = '100%';
                document.querySelector('.li_1').style.color = 'white';
                document.querySelector('.li_2').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_2').style.color = 'white';
                document.querySelector('.li_3').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_3').style.color = 'white';
                document.querySelector('.li_1').querySelector('.li_selected').style.width = '0%';
                document.querySelector('.li_4').style.color = 'red';
            }
        })
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    })
}