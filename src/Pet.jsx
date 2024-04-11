//without using jsx code---------

// const Pet = (props) => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, props.Name),
//     React.createElement("h2", {}, props.Category),
//     React.createElement("h2", {}, props.Breed)
//   );
// };

const Pet = (props) => {
  return (
    <div>
      <h1>{props.Name}</h1>
      <h2>{props.Category}</h2>
      <h2>{props.Breed}</h2>
    </div>
  );
};

export default Pet;
