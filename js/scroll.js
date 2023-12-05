'use strict';

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;


document.addEventListener('scroll', ()=> {
    const direction = window.scrollY - document.lastScrollPosition > 0 ?'down' : 'up'; 
    const sectionEl = [...document.querySelectorAll('section')];


    if (document.onWayTo === null) {
        const destinationIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destinationIndex >= 0 && destinationIndex < sectionEl.length) {
            document.onWayTo = destinationIndex
            window.scroll(0, sectionEl[destinationIndex].scrollY)
        }
    }
    
    

    sectionEl.forEach((section, index) => {
        if (window.scrollY === section.scrollY) {
            document.lastCentered = index;
            section.className = 'active';
            if(document.onWayTo === index) {
                document.onWayTo = null;
            }
        }else {
            section.className = '';
        }
    });


    document.lastScrollPosition = window.scrollY;
})