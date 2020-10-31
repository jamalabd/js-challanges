// example of a event in  react using class based components
class Event extends React.component({
  event(eve) {
    // logic of what the event does
  },

  render() {
    return ( <
      h1 onClick = {
        this.event
      } > Click me < /h1>
    )
  }


})