// why would you use arrow functions in react?
const a1 =
  "they have no this keyword, so it refrences the lexical scop. More concise";

// How to prevet components from re-rendering?

const a2 =
  "shouldComponentUpdate() asks if it should render, return false and it wont render";
const a2_1 =
  "React.PureComponent, extend React.PureComponent when doing a class based component. auto same as shouldComponentUpdate BUT its outomatic";
const a2_2 =
  "React.memo same as React.PureComponent but for functional components";

// explain error boundaries in react

const a3_3 = `
 like cath in try catch it catches the errors,
 has its own life sycle hooks,
 - static getDerivedStateFromError: geting state from error, catch error and change state accordingly
 - componentDidCatch: once caught you can log the error thats happing

`;

// best life cycle method for making api calls

const a4 = `
 componentDidMount: makes sure your vertual dom is ready
`;

// name some of the patters react uses: look it up
const a4 = `
 - context-api pattern: saves your the trouble of prop drilling, props can become accesible everywhere
 - render props: pass compnent as a function, allows you to seper ate chils from parent
 - presentaiona component pattern: non state code, presentational code being used in functions and state code being used in classes
 `;

// why would you use react in your project : look it up

const a5 = `
  decision has to be made based on the project itself, if ract is abuout to have a big update proboly wouldnt use it
  but i just like react because of how modular it is and how jsx mimic actual javacript
 `;

// what is css in js

const s6 = `
 css gets passed as js obj
  ability to write css in your javascript file, use javascript logic inside of css;
`;

// why cant you upadate the state directly or why cant you update the state without set state

const a7 = `
setState rerender automaticly,  components might not rerender if you do especialy when using React.PureComponent or memo,
when React.PureComponent compares the current state to the new state it wont see a difference if the  state is being changed so it wont rerender
;
`;

// how many ways can you conditonly rendre in react
const a8 = `
  use an if statement,
  short circut AND operator,
  ternary conditional opperator ( ternary operator in react),
  element variables
 `;

// what are fragments and why do we us them

const a9 = `
  satisfy reacts creiteria where maultiple jsx elements have to be wrapped by one tag, at build tom it doesnt show up in the dom like an invisibel div but you cant add anything to it like styles
 `;

// how to do code splitting in react

const a10 = `

 when the react code compiles,
 the bundler bundles your hole application into a single file code splitting fixes by splitting the budle into smaller chunks and only using the chunks needed, in rect its done with:

 - dinamic import or lazy loading
`;

// what are alternatives to redux

const a11 = `
- mobx
- apollo client + graphQl
`;

// why do the Component names in JSX start with capital letter?

const a12 = `
 how React knows to render a Component, and not a HTML Element
`;

// what is redux middle ware

const a13 = `
 redx saga and redux thunk are both middle wares
  sends req to server when comes back positive then updats store, keeps data base and store in sycn
`;

// How to optimize a React app

const a14 = `
  depends on the app so ask questions!
  - if speed issue you might be rerender or rending components unecisaraly
  - if packege size is to big use react lazy loading
`;

// explain vertual dom

const a15 = `
 react creats a copy of the dom, when it reredners it compares the two and updates whats been changed
`;

// lifecycle methods render \

const a16 = `
 constuctro: sets initial state inside, this.state
 static getDerivedStateFromProps: gets state from this.props
 rendr: renders jsx, is manditory, cant set state here
 componentDidMount: runs after component mointed, use with api
`;

// lifecycle methods re-render

const a16 = `
componentDidUpdate: did the component update, similar componentDidMount
 shouldComponentUpdate: manualy dicide what if a component should rerender
`;
