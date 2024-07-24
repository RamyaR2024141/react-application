/**
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">Hello World From React!</h1>
 *      </div>
 * </div>
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading1" }, "Hello World From React!")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" }, // attributes to the element
  "Hello World From React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
