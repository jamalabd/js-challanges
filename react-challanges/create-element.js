// is react.creatElement (legacy code)

const element = ( <
  h1 className = 'greeting' >
  Hellow World <
  /h1>
);

const element = React.creatElement(
  'h1', {
    className: 'greeting'
  },
  'Hello, World'
)