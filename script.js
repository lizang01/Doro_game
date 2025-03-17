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
    resultImage.style.opacity = 1;

    // 隐藏输入框和按钮
    const container = document.querySelector('.container');
    container.style.opacity = 0.3;

    // 显示重试容器
    const retryContainer = document.querySelector('.retry-container');
    retryContainer.style.display = 'flex';
}

function retry() {
    const newRandomNumberInput = document.getElementById('newRandomNumber');
    let newRandomNumber = parseInt(newRandomNumberInput.value, 10);

    if (isNaN(newRandomNumber)) {
        alert('请输入有效的数字');
        return;
    }

    // 图片总数为17
    const imageCount = 17;

    // 计算有效的图片索引
    const validIndex = ((newRandomNumber - 1) % imageCount) + 1;

    // 构建图片路径
    const imagePath = `game/image/image${validIndex}.jpg`;

    console.log(`New Random Number: ${newRandomNumber}`);
    console.log(`Valid Index: ${validIndex}`);
    console.log(`Image Path: ${imagePath}`);

    // 显示图片
    const resultImage = document.getElementById('resultImage');
    resultImage.src = imagePath;
    resultImage.style.opacity = 1;

    // 清空新输入框
    newRandomNumberInput.value = '';
}

