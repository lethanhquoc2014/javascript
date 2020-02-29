function changeImage(imageNumber)
{
    var imageClicked = document.images[imageNumber];
    var myImages = new Array('1.jpg', '2.jpg', '3.jpg');
    var newImageNumber = Math.round(Math.random() * 2);
    while(imageClicked.src.indexOf(myImages[newImageNumber]) != -1) {
        newImageNumber = Math.round(Math.random() * 2);
    }
    imageClicked.src = "images/" + myImages[newImageNumber];

    return true;
}