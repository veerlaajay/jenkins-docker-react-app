// Heading has the content and the tag
// Root has the content in the DOM
// Heading is rendered in the root


const heading = React.createElement("h1", {

    id : "heading",
},"Hello World from React")



const gparent = React.createElement("div", {id: "gparent"}, 
 React.createElement("div", {id: "parent"},
[React.createElement("h1", {id: "child"}, "Hello World from React")]))


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(gparent);