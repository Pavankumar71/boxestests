const Box = (props) => {
  //  Write your code here.
  const { className, children };
  return (
    <div className={className}>
      <p className="box-label">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small" children="Small" />>
      <Box className="medium" children="Medium" />>
      <Box className="large" children="Large" />>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
