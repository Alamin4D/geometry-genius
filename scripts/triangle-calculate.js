function calculateTriangleArea (){
    // triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // triangle calculate area
    const area = 0.5 * base * height;
    console.log('triangle calculate area is', area);

    // display triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    
}