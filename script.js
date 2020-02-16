const initSpSliderNav = () => {
    const navHandlers = document.querySelectorAll('[data-action]');
    if (navHandlers){
        navHandlers.forEach(handler => {
            handler.addEventListener('click', (event) => {
                event.preventDefault();
                const targetImg = handler.parentElement.querySelector('img');

                if (targetImg){
                    const navAction = handler.dataset.action || 'next';
                    const index = parseInt(targetImg.dataset.index) || 0;
                    const images = targetImg.dataset.images ? targetImg.dataset.images.split(',') : [];
                    
                    if (images.length > 0){
                        let newIndex;
                        if (navAction == 'next'){
                            newIndex = index+1;
                            if (newIndex >= images.length)
                                newIndex = 0;
                        } else {
                            newIndex = index-1;
                            if (newIndex < 0)
                                newIndex = images.length-1;
                        }

                        targetImg.dataset.index = newIndex;
                        targetImg.src = images[newIndex];
                        
                        //console.log('num of images:', images.length);
                        //console.log('next index:', newIndex);
                    }


                }
            })

        });
    }
}



const initSpSlider = (el) => {
    const createNavEl = (action, className, content) => {
        const navEl = document.createElement('span');
        navEl.className = className;
        navEl.dataset.action = action;
        navEl.innerHTML = content;
        return navEl;
    }

    const handleNavClick = (event, handler, targetImg) => {
        event.preventDefault();

        const navAction = handler.dataset.action || 'next';
        const index = parseInt(targetImg.dataset.index) || 0;
        const images = targetImg.dataset.images ? targetImg.dataset.images.split(',') : [];
        
        if (images.length > 0){
            let newIndex;
            if (navAction == 'next'){
                newIndex = index+1;
                if (newIndex >= images.length)
                    newIndex = 0;
            } else {
                newIndex = index-1;
                if (newIndex < 0)
                    newIndex = images.length-1;
            }

            targetImg.dataset.index = newIndex;
            targetImg.src = images[newIndex];
        }
    }

    const imageEl = document.querySelector(el);

    if (imageEl){
        const NextNavEl = createNavEl("next", "next", ">");
        const PrevNavEl = createNavEl("prev", "prev", "<");
        imageEl.parentElement.append(NextNavEl);
        imageEl.parentElement.append(PrevNavEl);

        [NextNavEl, PrevNavEl].forEach(handler => {
            handler.addEventListener('click', (event) => {
                handleNavClick(event, handler, imageEl);
            });
        });
    }
}

initSpSlider('.sp-slider__image');