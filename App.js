
const heading = React.createElement("h1",{id:"heading"},"Hello World from react");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag"),])
    );

    root.render(parent); 