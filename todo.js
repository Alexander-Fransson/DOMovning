// tar bort items från listan när ma klickar x knappen

document.querySelectorAll('li button').forEach(element => {
    element.addEventListener('click', () => {element.parentNode.remove()});
});

// lägger till saker i listan

document.querySelector('#addItemButton').addEventListener('click',() => {
    const text = document.querySelector('#addItemInput').value;

    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(text + " ")

    const button = document.createElement('button');
    const X = document.createTextNode('X');

    button.appendChild(X);

    newLi.appendChild(newLiText);
    newLi.appendChild(button);
    document.querySelector('ul').insertBefore(newLi,document.querySelector('ul li'));
    button.addEventListener('click', () => {
        newLi.remove();
    }); 
});

document.querySelector('input').addEventListener('keyup', (e) => {
    //onsole.log(e.target.value)

    document.querySelectorAll('li').forEach(element => {
        element.style.display = ""
        if (!element.textContent.includes(e.target.value)) {
            element.style.display = "none"
        }
    })    
})



