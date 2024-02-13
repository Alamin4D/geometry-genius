function calculateRectangleArea (){
    // rectangle width value
    const RectangleWidth = document.getElementById('rectangle-width');
    const RectangleWidthText = RectangleWidth.value;
    const width = parseFloat(RectangleWidthText);
    console.log(width);

    // rectangle length value
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length);

    // rectangle calculate area
    const area = width * length;
    console.log('Area of the rectangle', area);

    // display rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}