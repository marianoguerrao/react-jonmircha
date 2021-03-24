import React from "react";

// class Example extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>{this.props.msg}</h1>
//       </Fragment>
//     );
//   }
// }

// function Example(props) {
//   return (
//     <>
//       <h1>{props.msg}</h1>
//     </>
//   );
// }

const Example = (props) => (
  <>
    <h1>{props.msg}</h1>
  </>
);

export default Example;
