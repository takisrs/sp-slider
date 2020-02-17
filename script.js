const initSpSlider = (imageEl) => {
    const createNavEl = (action, className, content) => {
        const navEl = document.createElement('span');
        navEl.className = className;
        navEl.dataset.action = action;
        navEl.innerHTML = content;
        return navEl;
    }

    const preloadImage = (url) => {
        const img = new Image();
        img.src = url;
    }

    const handleNavAction = (action) => {
        imageEl.classList.add('animate');
        const navAction = action || 'next';
        const index = parseInt(imageEl.dataset.index) || 0;
        const images = imageEl.dataset.images ? imageEl.dataset.images.split(',') : [];
        
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

            preloadImage(images[newIndex]);
            setTimeout(() => {
                imageEl.dataset.index = newIndex;
                imageEl.src = images[newIndex];
                imageEl.classList.remove('animate');
            }, 200);

            
        }
    }

    let InitialPos = null;
    const getInitialPos = (e) => {
        e.preventDefault();
        InitialPos = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    }

    const handleMove = (e) => {
        e.preventDefault();
        if (InitialPos === null) {
            return;
        }

        var currentPos = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

        var diffPos = InitialPos - currentPos;

        if (diffPos > 0) {
            handleNavAction("prev");
        } else if (diffPos < 0){
            handleNavAction("next");
        }
    };


    if (imageEl && ('images' in imageEl.dataset)){
        const NextNavEl = createNavEl("next", "sp-slider__nav sp-slider__nav--next", ">");
        const PrevNavEl = createNavEl("prev", "sp-slider__nav sp-slider__nav--prev", "<");
        imageEl.parentElement.append(NextNavEl);
        imageEl.parentElement.append(PrevNavEl);

        [NextNavEl, PrevNavEl].forEach(handler => {
            handler.addEventListener('click', (event) => {
                event.preventDefault();
                handleNavAction(handler.dataset.action);
            });
        });

        if ('ontouchstart' in window) {
            imageEl.addEventListener('touchstart', getInitialPos, false);
            imageEl.addEventListener('touchend', handleMove, false);
        } else {
            imageEl.addEventListener('mousedown', getInitialPos, false);
            imageEl.addEventListener('mouseup', handleMove, false);
        }

        //imageEl.addEventListener('touchmove', e => { e.preventDefault() }, false);
    }
}

const images = document.querySelectorAll('.sp-slider__image');
images && images.forEach(item => {
    initSpSlider(item);
});