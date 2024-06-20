function customRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)

    // NOTE -> If there only one attribute or more than 2 attribute 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_black'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)