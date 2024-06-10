const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      <Parts parts={parts[0]} />
      <Parts parts={parts[1]} />
      <Parts parts={parts[2]} />
    </>
  );
};

const Parts = ({ parts }) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

export default App;
