const head = React.createElement("h1", { id: "head" }, "Hello from React");
console.log(head);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(head);
