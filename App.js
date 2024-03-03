
import React from "react"; //this react refers to react inside node_modules
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement("h2", { id: "heading2" }, "This is react heading in h2 ok see");
console.log(heading); //{$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}: object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this heading will overwrite inner h1


const heading = React.createElement("h2", { id: "heading", className: "h2" }, "H2 heading"); //create react element using core react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//dom element are html element
//React Element: it is an element equivalent to dom element
// react element is an oobject
const jsxheading = <h1 id="heading" className="jsxheading">Hello Using JSX🚀</h1>//jsx //jsx is diff then html //this code is eq to react.createElement code //create react element using jsx

//jsx is html like syntax //xml like syntax

//jsx is react elelemnet? no it's a syntax

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
console.log(jsxheading); //object same as react.createElement


//now we will use jsx

// const jsxheading2 = (<h1 id="heading" className="jsxheading">Hello Using JSX🚀</h1>): valid

const jsxheading2 = (
    <h1 id="head" className="jsxheading">
        Hello Using JSX🚀 multiple line
    </h1>
);

root.render(jsxheading2);
*/
//react component

//react component is normal js function which return some jsx element

// function: ()=>

const HeadingComponent = () => {
    return <div>
        <h1 className="heading">Hello from fun component</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //Hello from fun component

