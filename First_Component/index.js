class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Slot Machine</h3>
        <Slot s1="🍒" s2="🍇" s3="🍉" />
        <Slot s1="🍒" s2="🍒" s3="🍒" />
        <Slot s1="🍒" s2="🍇" s3="🍉" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
