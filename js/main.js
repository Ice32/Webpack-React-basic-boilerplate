require(["react", "react-dom","./Components/App.jsx", "jquery"], function(React, ReactDOM, App, $){
    ReactDOM.render(<App foo="something" />, document.getElementById("react-root"));
});