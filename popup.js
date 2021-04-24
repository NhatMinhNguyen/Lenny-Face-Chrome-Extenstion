
let faces = [
    {
        id: "lenny1",
        code: [40, 32, 865, 176, 32, 860, 662, 32, 865, 176, 41, 10]
    },
    {
        id: "lenny2",
        code: [40, 32, 864, 176, 32, 863, 662, 32, 865, 176, 41]
    },
    {
        id: "lenny3",
        code: [40, 32, 865, 126, 32, 860, 662, 32, 865, 176, 41]
    },
    {
        id: "lenny4",
        code: [40, 32, 865, 664, 32, 860, 662, 32, 865, 664, 41]
    },

]
function copy(text) {
    const ta = document.createElement('textarea');
    ta.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
    ta.value = text;
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    ta.remove();
}


for (i = 0; i < faces.length; i++) {

    const button = document.createElement('button');
    document.body.appendChild(button);
    button.setAttribute("id", `lenny${i}`);

    let code = faces[i].code;

    button.innerHTML = String.fromCharCode(...code);

    button.addEventListener("click", async () => {
        copy(String.fromCharCode(...code));
    });
}