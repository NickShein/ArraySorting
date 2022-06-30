export default function notification_expire(){
    let i = 9;
    let timerID = setInterval(() => {
        document.getElementById('notification_timer').innerHTML = i;
        i--;
        console.log(i);
    }, 1000);
    setTimeout(() => { clearInterval(timerID); }, 10000);
    let page_refresh = setTimeout(() => { document.location.reload();
}, 10000);
    document.getElementById('btn_wrng').onclick = () => {{
        clearInterval(page_refresh);
        document.querySelector('.notify-warning').style.display = 'none';
        }
    };
}