export default function modifySortsButtons(){
    const buttons = document.querySelectorAll('.h-btn');

    buttons.forEach(button =>{
        button.addEventListener('click', function handleClick(event) {
            event.target.parentElement.style.maxHeight = '0';
            event.target.parentElement.parentElement.style.setProperty('--transY', '0px');
            const class_name = '.' + event.target.parentElement.parentElement.classList[2];
            let file_name;
            if (class_name.substring(1) == 'bubbl'){
                file_name = 'bubble.txt';
            }
            else if (class_name.substring(1) == 'mixn'){
                file_name = 'mix.txt';
            }
            else if (class_name.substring(1) == 'combin') {
                file_name = 'comb.txt';
            } 
            else if (class_name.substring(1) == 'insrt') {
                file_name = 'ins.txt';
            } 
            else if (class_name.substring(1) == 'selct') {
                file_name = 'sel.txt';
            } 
            else if (class_name.substring(1) == 'quicks') {
                file_name = 'quick.txt';
            } 
            else if (class_name.substring(1) == 'merg') {
                file_name = 'mrg.txt';
            }
            else{
                file_name = 'prmd.txt';
            }
            let true_container;
            setTimeout(()=>{
                document.querySelector(class_name).innerHTML = '';
                const el = document.createElement('div');
                el.classList.add('true_container');
                document.querySelector(class_name).appendChild(el);
                
                true_container = document.querySelector(class_name).querySelector('.true_container');

                fetch('./html_buttons/' + file_name)
                    .then(response => response.text())
                    .then(text => true_container.innerHTML = text);
                for (let index = 1; index <= 100; index++) {
                    setTimeout(() => {
                        true_container.style.opacity = index + '%';
                    }, index * 8)
                    if (index == 100) {
                        document.querySelector(class_name).style.setProperty('--transY', '-100%');
                        document.querySelector(class_name).style.setProperty('--opacityAfter', '0%');
                        setTimeout(()=>{
                            document.querySelector(class_name).style.setProperty('--displaySMAfter', 'none');
                        },1000);
                    }
                }
            }, 500);
        });
    });
}