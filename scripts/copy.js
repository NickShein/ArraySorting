export default function copyToClipboard(text, usage) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
    let offsets = document.querySelector('.copy_data_btn').getBoundingClientRect();
    if (usage < 1){
        let left = offsets.left;
        let div = document.createElement('div');
        let square_div = document.createElement('div');
        let posX_alertwindow = event.clientX - left;
        if (event.clientX > 1585) {
            posX_alertwindow = 1585 - left;
        }
        div.classList.add('copy-notify');
        square_div.classList.add('square-copy-notify');
        if (document.querySelector('#resultOutput').value != 0){
            div.innerHTML = 'Текст було успішно скопійовано.';
        }
        else{
            div.innerHTML = 'Не знайдено даних для копіювання!';
        }
        document.querySelector('.copy_data_btn').appendChild(div);
        document.querySelector('.copy_data_btn').appendChild(square_div);
        document.querySelector('.copy-notify').style.left = posX_alertwindow + 'px';
        document.querySelector('.square-copy-notify').style.left = posX_alertwindow + 30 + 'px';
        console.log(event.clientX);
        setTimeout(()=>{
            document.querySelector('.copy-notify').style.opacity = 0;
            document.querySelector('.square-copy-notify').style.opacity = 0;
        }, 3000);
    }
    else{
        let left = offsets.left;
        let posX_alertwindow = event.clientX - left;
        if (event.clientX > 1585) {
            posX_alertwindow = 1585 - left;
        }
        document.querySelector('.copy-notify').style.left = posX_alertwindow + 'px';
        document.querySelector('.square-copy-notify').style.left = posX_alertwindow + 30 + 'px';
        document.querySelector('.copy-notify').style.opacity = 1;
        document.querySelector('.square-copy-notify').style.opacity = 1;
        console.log(event.clientX);
        setTimeout(() => {
            document.querySelector('.copy-notify').style.opacity = 0;
            document.querySelector('.square-copy-notify').style.opacity = 0;
        }, 3000);
    }
}