function App() {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      {course.map((course) =>{
        return(
          <Course key={course.id} course={course} />
        )
      })}
    </>
  );
}

const Course = ({ course }) => {
  return (
    <div>
      <Header key={1} course={course} />
      <Content key={2} parts={course.parts} />
      <Total key={3} parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <b>Number of exercises {total}</b>
    </div>
  );
};

export default App;
