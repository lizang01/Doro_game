function showImage() {
    const randomNumberInput = document.getElementById('randomNumberInput');
    const messageDiv = document.getElementById('message');
    const imageContainer = document.getElementById('imageContainer');

    const userInput = parseInt(randomNumberInput.value);

    if (isNaN(userInput) || userInput <= 0) {
        messageDiv.textContent = '请输入一个有效的正整数。';
        return;
    }

    // 获取图片文件列表
    fetch('/game/image')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            const images = links.filter(link => link.href.endsWith('.jpg') || link.href.endsWith('.png'));

            if (images.length === 0) {
                messageDiv.textContent = '没有找到任何图片文件。';
                return;
            }

            let index = userInput - 1;
            while (index >= images.length) {
                index -= images.length;
            }

            const imageUrl = images[index].href;
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Doro Image">`;
            messageDiv.textContent = '';
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            messageDiv.textContent = '无法加载图片，请稍后再试。';
        });
}