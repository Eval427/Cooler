const image = document.getElementById('image') as HTMLImageElement;

setInterval(async () => {
    const res = await fetch('https://cooler-production.up.railway.app/displayImage');
    const data = await res.json();
    if (data.img && data.img !== image.src) {
        image.src = data.img;
    }
}, 5000);