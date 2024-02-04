//const heading = React.createElement("h2", { id: "heading", xyz: "abc" }, "Hello World with React!");  //{} accepts attributes. it can be blank. //{} This object is the place where you gives attributes to your tags. //This is how we give attributes to our class.
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("header"));
//root.render(heading);
//console.log(heading); //object. h1 is not a tag. its an object. its a react element at the end of the day. this is an h1 type object. //is object mein props rahega //heading is react h1 element.
/*props:{
    "id": "heading",
    "xyz": "abc",
    "children": "Hello World with React!" //this is a children wich will go inside my h1 tag. //3rd thing we pass is children. 2nd thing is attributes //these all comes inside props.
}
*/
//react element is normal javascript object.
//props are children and attributes that we passes.
//{ id: "heading", xyz: "abc" }, "Hello World with React!": is a props.
//react.createElement is an object
//root.render(heading);: here we pass the react element i.e a js object to this render file.
//root.render function's job is to basically put the heading element into the root element.
//react.createElement basically creates a js object for you. heading is not an h1 tag yet.
//render method work is to take this h1 object and convert it into h1 tag and put it upon the dom.
/*
How to create nested react elements?
<div id="parent">
<div id="child">
<h1>I'm H1 tag</h1>
</div>
</div>
*/
//first we will create parents
/*
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm H1 Tag")
    )
);
//root hum bana sakte hain element bnnae k bad v pahle v. Bas render root bnne k bad hona chahiye.
root.render(parent);
console.log(parent);
*/
//parent is an object and a react element. The React element is at the end of the day is an object
//This ract object becomes an html that browser understands.
//never think when we do react.createElement it create html. It create object.
//while render it to dom, it converts itself to html and put itself into the dom.

//this is how you can create nested kind of structure
//what if we to create sibling like similar to h1 tag. something like <h1></h1><h2></h2>
/*
<div id="parent">
<div id="child">
<h1>I'm H1 tag</h1>
<h2>I'm h2 tag</h2>
</div>
</div>

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag")])    //ek sath 2 child k liye array type children bhej sakte hain /[]: array of children
);
root.render(parent);
console.log(parent);
//for 2 element as a sibling, you have to baiscally create array of children.
*/
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag")])]);

root.render(parent);
console.log(parent);

//That's why alt is here. We have to make it like jsx as making react element like this is complex.

//react cdn should be before <script src="./app.js">. Order matters
//if we put any thing inside rrot. It will be replaced with things render insdie root. replaced not appended
//we can put react even in a small existing website, part of website like menu, header, card etc. Other frameworks will tell us to make an app. But we can use react in a small part.
//order of file matters.
//what is root where we rendered stuffs.
//react element is an object at the end of the day. This is covereted in html which browser understand. It is put by root.render method.

//create element api takes 3 rgument. //1. name of tag, 2. attribute 3. children of element. 1st childern could be normal react element. //2nd is we have multiple children, then we will pass this with an array of children

//what ever will pass through render will replace what inside root.
//react is a library not a framework.
