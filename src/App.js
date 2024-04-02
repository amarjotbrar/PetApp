const Pet = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.Name),
    React.createElement("h2", {}, props.Category),
    React.createElement("h2", {}, props.Breed)
  )
};

const App = () => {
  return React.createElement(
    "div",
    {},
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet,{Name: "Jackey", Category: "Dog", Breed: "Huskey"}),
      React.createElement(Pet,{Name: "Mia", Category: "Cat", Breed: "Stray"}),
      React.createElement(Pet,{Name: "Bable", Category: "Duch", Breed: "Australian"})
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));