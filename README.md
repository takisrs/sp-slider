<h1>Simple Image Slider</h1>
<a href="https://takisrs.github.io/sp-slider/slider.html">Demo</a>

<p>Firstly, add data-images="image1.jpg,image2.jpg" attribute to the image tag</p>
<p>Then, initialize by passing the HTMLElement object to initSpSlider</p>
<p>Ex.<br/>
<pre>initSpSlider(document.querySelector('.sp-slider__image'));</pre></p>

<p>or for multible elements...</p>
<p>Ex.<br/>
<pre>const images = document.querySelectorAll('.sp-slider__image');
images && images.forEach(item => {
    initSpSlider(item);
});
</pre>
</p>
