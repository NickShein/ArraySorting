export default function animateProgressBar(){
    const page_progress = document.querySelector('.page-progress');
    const container = document.querySelector('.page-container');

    const animatePB = () =>{
        let scrollDistance = -container.getBoundingClientRect().top;
        let pageWidthProgress = (scrollDistance / (container.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
        if (pageWidthProgress < 25){
            page_progress.style.background = 'linear-gradient(to right, green, lime)';
        }
        else if (pageWidthProgress < 50){
            page_progress.style.background = 'linear-gradient(to right, green, lime, yellow)';
        }
        else if (pageWidthProgress < 75) {
            page_progress.style.background = 'linear-gradient(to right, green, lime, yellow, orange)';
        }
        else if (pageWidthProgress < 100) {
            page_progress.style.background = 'linear-gradient(to right, green, lime, yellow, orange, red)';
        }
        page_progress.style.width = pageWidthProgress + '%';
    }

    window.addEventListener('scroll', animatePB);
};