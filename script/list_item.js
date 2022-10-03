// ta bort saker ur listan

const list = document.querySelector('ul') 

list.addEventListener('click', (e) => {

    if(e.composedPath()[0].className == 'button'){
        e.target.remove();
    }

    if(e.composedPath()[0].className == 'y-button'){
        if (e.target.style.color == "green") {
            e.target.style.color = "black"
            e.target.setAttribute("duty",e.target.getAttribute("remember"));
        }
        else {
            e.target.style.color = "green"
            e.target.setAttribute("duty","Done");
        }
    }
});

// lägger till saker i listan

const templateItem = document.createElement('template');
templateItem.innerHTML = `
    <style> </style>
    <li>
        <span></span>
        <button class="button">X</button>
        <button class="y-button" >Y</button>
    </li> 
`;

class ListItem extends HTMLElement {
    
    constructor() {
        
        super();
        

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateItem.content.cloneNode(true));
        this.shadowRoot.querySelector('span').innerText = this.getAttribute('duty');
    }

    static get observedAttributes() { return ['duty']; }


    connectedCallback() {
        this.shadowRoot.querySelector('span').innerText = this.getAttribute('duty');
    }

    attributeChangedCallback() {
        this.shadowRoot.querySelector('span').innerText = this.getAttribute('duty');
    }
}

window.customElements.define('list-item', ListItem);

document.querySelector('#addItemButton').addEventListener('click',(e) => {

    const text = document.querySelector('#addItemInput').value;
    const newItem = document.createElement('list-item');

    newItem.setAttribute('duty', text);
    newItem.setAttribute('remember', text);

    document.querySelector('ul').insertBefore(newItem, document.querySelector('ul list-item'));
});

//sök saker i listan

document.querySelector('input').addEventListener('keyup', (e) => {

    document.querySelectorAll('list-item').forEach(element => {
        element.style.display = "block"
        if (!element.getAttribute("duty").includes(e.target.value)) {
            element.style.display = "none"
        }
    })    
})

//gömmer done

let isClicked = false;

document.querySelector('#hide-done').addEventListener('click',() => {

    if(!isClicked){
        document.querySelectorAll('list-item').forEach(element => {
            if(element.getAttribute('duty') == 'Done'){
                element.style.display = "none";
            }
        })

        isClicked = true;
    }else{
        document.querySelectorAll('list-item').forEach(element => {
            element.style.display = "block";
        })

        isClicked = false;
    }
})



