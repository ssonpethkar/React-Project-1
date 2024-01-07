function cusomRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // to append data 
    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)

}

const reactElement = {
    type:'a', 
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to go on google'
}
const mainContainer = document.querySelector('#root')

cusomRender(reactElement, mainContainer);

