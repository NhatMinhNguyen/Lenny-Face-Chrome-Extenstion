let button = document.getElementById("test");

button.innerHTML='(&#865;&#176; &#860;&#662; &#865;&#176;)';

function copy(text){
    const ta = document.createElement('textarea');
    ta.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
    ta.value = text;
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    ta.remove();
}


button.addEventListener("click", async () => {
    copy(String.fromCharCode(40, 32, 865, 176, 32, 860, 662, 32, 865, 176, 41, 10));
});

