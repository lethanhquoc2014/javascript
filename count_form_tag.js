function windowOnload()
{
    var numberForms = document.forms.length;
    var i;
    for(i=0; i<numberForms; i++) {
        console.log(document.forms[i].name);
    }
}