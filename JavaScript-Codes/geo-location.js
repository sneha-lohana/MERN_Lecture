navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
}, (err) => {
    console.log('error', err);
});

// Add video tag in HTML page

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    const video = document.getElementById('video');
    video.srcObject = stream;
    console.log(stream);
}).catch(err => {
    console.log(err);
});