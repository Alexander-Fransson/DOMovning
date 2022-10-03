//skapar tempalte för kort

const templateCard = document.createElement('template');
templateCard.innerHTML = `
<img src="../img/back.png">
`;

class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateCard.content.cloneNode(true));
    }
}

window.customElements.define('memory-card', Card);