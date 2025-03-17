function showImage() {
    const randomNumberInput = document.getElementById('randomNumber');
    let randomNumber = parseInt(randomNumberInput.value, 10);

    if (isNaN(randomNumber)) {
        alert('请输入有效的数字');
        return;
    }

    // 图片总数为17
    const imageCount = 17;

    // 计算有效的图片索引
    const validIndex = ((randomNumber - 1) % imageCount) + 1;

    // 构建图片路径
    const imagePath = `game/image/image${validIndex}.jpg`;

    console.log(`Random Number: ${randomNumber}`);
    console.log(`Valid Index: ${validIndex}`);
    console.log(`Image Path: ${imagePath}`);

    // 显示图片
    const resultImage = document.getElementById('resultImage');
    resultImage.src = imagePath;
}
