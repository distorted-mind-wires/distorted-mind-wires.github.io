import AnchorJS from 'anchor-js';
import copy from 'clipboard-copy';

const anchors = new AnchorJS();
document.addEventListener('DOMContentLoaded', (event) => {
    anchors.options = {
        placement: 'left',
        icon: '#'
    };
    anchors.add();
});

function copyCode(copyElement) {
    console.log(copyElement.parentElement.innerText);
    copy(copyElement.parentElement.innerText);
}

document
    .querySelectorAll(".copy-code")
    .forEach(e => e.addEventListener('click', () => copyCode(e)));
