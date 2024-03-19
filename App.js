
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
//function(): ()=>

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

//we can put any js code in {}
const data = 1000;
//const ndata = api.getData(); //data comming from this api. So it will go and run inside {}
//what if bad api sends malicious data? It can read cokokies and other data by running javascript inside {}. We are injecting data intop {}

//This type of attack is known as cross side scripting attack


//by running js code in your browser, hacker can acess cookiess, laptop data, session data etc.


///but jsx takes care of this injection attack
//even if the api will send some malicious data, jsx will escape it. It is sanetising the data.
//whatever js will be in {}, bowser not blindly run it. It will first sanetise the data.
//jsx revenets cross side scripting


const title = (
    <p>
        Hi from react element
        <br />
    </p>
);
const Name = () => {
    return <h3>Hello from name component</h3>   //return (<h3>Hello from name component</h3>);
}
const HeadingComponent = () => {
    return <div id="header">
        {title}
        {data}
        <Name /> {/*both way is correct. We can write it any no of times*/}
        <Name></Name>
        <name></name> {/*componenet ka first letter capital se start hota hain. small m ye work nhi karega*/}
        {/* {title()}  */}
        {/*Will not work. title is not a function. React element is an object at the end of day. */}
        {Name()}  {/*will owk as fun component is a fn at the end of the day. */}
        <h1>Hello from fun component</h1>
        {12 * 34}
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
root.render(<HeadingComponent />); 