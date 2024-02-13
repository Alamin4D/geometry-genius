function calculateParallelogramArea (){
    // parallel base value
    const parallelBase = document.getElementById('parallel-base');
    const parallelBaseText = parallelBase.value;
    const baseGram = parseFloat(parallelBaseText);
    console.log(baseGram);

    // parallel height value
    const parallelHeight = document.getElementById('parallel-height');
    const parallelHeightText = parallelHeight.value;
    const heightGram = parseFloat(parallelHeightText);
    console.log(heightGram);

    // parallel calculate area
    const area = baseGram * heightGram;
    console.log('Area of the parallel', area);

    // display parallel area
    const parallelArea = document.getElementById('parallel-area');
    parallelArea.innerText = area;
}