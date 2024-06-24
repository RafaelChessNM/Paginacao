const gifsPerPage = 5;
let currentPage = 1;

const gifs = [
    "https://media1.tenor.com/m/odE2i20986kAAAAd/cahara-fear-and-hunger.gif",
    "https://media1.tenor.com/m/4UUOjFQ-mEMAAAAC/fear-and-hunger-d%27arce.gif",
    "https://media1.tenor.com/m/Kk2f23edYHkAAAAC/funger-fear-and-hunger.gif",
    "https://media.tenor.com/Evg8eSTofrgAAAAM/fear-and-hunger-fear-%26-hunger.gif",
    "https://media.tenor.com/9qzVATdShLgAAAAM/black-kalev-rher.gif",
    "https://media.tenor.com/ov3Jx6Fu-6kAAAAM/dark-souls-dance.gif",
    "https://media1.tenor.com/m/qVKu1SCW-uMAAAAd/frampt-serpent.gif",
    "https://media1.tenor.com/m/_mX0c3gT8icAAAAd/tweaking-wegeekinghard.gif",
    "https://media1.tenor.com/m/rC_mbGxsqu8AAAAd/dawg-skull-emoji.gif",
    "https://media1.tenor.com/m/ieXO0Ui-EoMAAAAC/skull-explode.gif"
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);