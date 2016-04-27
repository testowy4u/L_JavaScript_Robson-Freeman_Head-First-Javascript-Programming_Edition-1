//

function Widget(partNo, size) {
    this.no = partNo;
    this.breed = size;
}

function FormFactor(material, widget) {
    widget.material = material;
    return widget;
}

var widgetA = new Widget(100, "large");
var widgetB = new Widget(101, "small");
FormFactor("plastic", widgetA);
FormFactor("metal", widgetB);

console.log(widgetA, widgetB);