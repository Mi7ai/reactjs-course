import React from 'react';
import ReactDom from 'react-dom';

// must capitalize 1st leter
// this is a component
// enclose within parentes
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// nested component

const Person = () => {
  return (
    <div>
      <h2>Mihai</h2>
    </div>
  );
};

// nested component
const Message = () => {
  return (
    <div>
      <h3>This is my message</h3>
    </div>
  );
};

ReactDom.render(<Greeting />, document.getElementById('root'));
