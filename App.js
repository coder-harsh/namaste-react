
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

const Title = () => (
    <p className="tittlep">
        Hi from title
    </p>
);

const HeadingComponent = () => {
    return <div>
        <h1 className="heading">Hello from fun component</h1>
        <Title />
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //Hello from fun component

const digit = 400;

const HeadingComponent = () => {
    return <div>
        <h1 className="heading">Hello from fun component</h1>
        <h1>{digit}</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //Hello from fun component

const title = (
    <p>Hi from react element</p>
)

const HeadingComponent = () => {
    return <div>
        <h1 className="heading">Hello from fun component</h1>
        <h1>{title}</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //Hello from fun component //Hi from react element


//put react element inside react element

const elm = <span>Hi from react elelement span</span>

const title = (
    <p>
        Hi from react element
        <br />
        {elm}
    </p>
    //{elm}: we can not write like this as we need to wrap up the element in container
);

const HeadingComponent = () => {
    return <div>
        <h1 className="heading">Hello from fun component</h1>
        <h1>{title}</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// we can also put react component inside react element also


const HeadingComponent = () => {  //yaha {} bracket rahega to return karna padega. agar () rahega to return nhi karna padega
    return <div>
        <h1 className="heading">Hello from multi line fun component</h1>
    </div>
};
const HeadinComponent = () => <div><h1 className="heading">Hello from single line fun component</h1></div>;  //even {} rahega but sinle line m rahega to no need of retunn
const title = (
    <p>
        Hi from react element
        <br />
        <HeadingComponent />
        <HeadinComponent />
    </p>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);

//if we will put creact component in react element and react element in react component, browser will go in infinite loop
*/