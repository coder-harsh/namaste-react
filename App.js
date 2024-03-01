
import React from "react"; //this react refers to react inside node_modules
import ReactDOM from "react-dom/client";
const heading = React.createElement("h2", { id: "heading2" }, "This is react heading in h2 ok see");
console.log(heading); //{$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}: object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this heading will overwrite inner h1
