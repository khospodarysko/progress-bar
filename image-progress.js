function loadImage(url, locatorImg, locatorProgress) {
    const request = new XMLHttpRequest();

    request.onprogress = function (event) {
        if (!event.lengthComputable) {
            return;
        }
        const loaded = event.loaded;
        const total = event.total;
        const progress = (loaded / total).toFixed(2);

        $(locatorProgress).prop('aria-valuenow', parseInt(progress * 100));
        $(locatorProgress).text(parseInt(progress * 100) + '%');
        $(locatorProgress).css("width", parseInt(progress * 100) + '%');

        console.log(progress);
    };

    request.onload = function (event) {
        $(locatorImg).prop('src', url);
        $('.progress').css("visibility", 'hidden');
        console.log('complete');
    };

    request.onerror = function (event) {
        console.log('error');
    };

    request.open('GET', url, true);
    request.overrideMimeType('text/plain; charset=x-user-defined');
    request.send(null);
}
