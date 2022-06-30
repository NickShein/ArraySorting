export default function sortsObserve(){
    const sections = document.querySelectorAll('.sorting_method');

    const options = { 
        root: null,
        threshold: 0.045,
    };

    const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){

            entry.target.querySelector('.h-container').classList.remove('h-rotate');

            if ( entry.target.querySelector('.h-container').classList.contains('l-container') || entry.target.querySelector('.h-container').classList.contains( 'r-container' ) ){

                entry.target.getElementsByClassName('h-container')[0].style.opacity = '1';

                if (entry.target.querySelector('.h-container').classList.contains('l-container')){ 

                    entry.target.querySelector('.h-header').style.setProperty('--width', '100%');
                    entry.target.style.transform = 'translateX(0%)';

                }
                if ( entry.target.querySelector('.h-container').classList.contains('r-container') ) {

                    entry.target.querySelector('.h-header').style.setProperty('--tx', 'translateX(0%)');
                    entry.target.style.transform = 'translateX(0%)';

                }
            }
            observer.unobserve(entry.target);
        }
    })
    }, options);
    sections.forEach( section => {
        setTimeout(()=>{
            observer.observe(section);
        },100)
    })
}