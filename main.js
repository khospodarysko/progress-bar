const image = "#image";
const progress = ".progress-bar";

$(document).ready(function(){
    // $('<img src="./8k.jpg"/>').on('load', function () {
    //     $(this).appendTo(image);
    // });

    // FIXME doesn't show image
    loadImage("./8k.jpg", image, progress);
});