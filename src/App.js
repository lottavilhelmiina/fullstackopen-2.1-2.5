const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};
const Content = (parts) =>
  parts.map((item) => (
    <p>
      {" "}
      Course: {item.name}
      <br />
      Exercises: {item.exercises}
    </p>
  ));

/* Pitäis saada tän tyylinen rakenne toimimaan jotenkin
const Content = (parts) =>
  parts.map((part) => (
    <Part key={part.id} part={part}>
      {part.name} {part.exercises}
    </Part>
  ));


const Part = ({ part }) => {
  return <li>{part.content}</li>;
};
*/

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      {Content(course.parts)}
    </>
  );
};

const App = (props) => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  };

  // rivi 29: tän takia propseja tarvitaan. Jos ottaa tuon propsin kutsumisen pois, homma ei toimi.
  return (
    <div>
      <Course course={course} />
    </div>
  );
};
export default App;
