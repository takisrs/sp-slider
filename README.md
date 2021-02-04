# A Simple Image Slider

## Demo
[Demo](https://takisrs.github.io/sp-slider/index.html)

## How to use
Firstly, add `data-images="image1.jpg,image2.jpg"` attribute to the image tag   

```html
<div class="sp-slider">
    <img class="sp-slider__image" data-index="0" data-images="images/image1.jpg,images/image2.jpg,images/image3.jpg,images/image4.jpg" src="images/image1.jpg" alt="Image">
</div>
```

Then, initialize by passing the HTMLElement object to initSpSlider.   
Ex.   
```javascript
initSpSlider(document.querySelector('.sp-slider__image'));
```

or for multible elements...   
```javascript
const images = document.querySelectorAll('.sp-slider__image');
images && images.forEach(item => {
    initSpSlider(item);
});
```
