import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// NOTE-> you can insert variable using {}. ref-to MyApp function
// this is also known as evalution expression (final outcome of js expression)
function MyApp(){
    const username = 'guru'
    return (
        <div>
        <h1>Custom App {username}</h1>
        </div>
    )
}
// if jsx parse into a js object
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_black'
    },
    children: 'Click me to visit google'
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit to google</a>
)

const anotheruser = "variable"
const reactElement2 = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    //MyApp is a Function so, we use this
    // MyApp()

    //can we pass directly the js object for sake of optimization
    // <ReactElement /> || ReactElement() //not work

    // AnotherElement  // this work..

    reactElement2

)
