// use method write()
/*
switch (window.screen.colorDepth)
{
    case 1:
    case 4:
        document.bgColor = "white";
        break;
    case 8:
    case 15:
    case 16:
        document.bgColor = "blue";
        break;
    case 24:
    case 32:
        document.bgColor = "skyblue";
        break;
    default:
        document.bgColor = "white";
}
document.write("Your screen supports " + window.screen.colorDepth + "bit color");
*/

// use property images
console.log(document.images); // array of images in current page
console.log(document.links); // array of <a> tags in current page