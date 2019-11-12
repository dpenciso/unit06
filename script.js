var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    threshold: 0
});
if (lazyLoadInstance) {
    lazyLoadInstance.update();
}