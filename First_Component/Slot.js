class Slot extends React.Component {
  render() {
    console.log(this.props);
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    return (
      <div>
        <h1>
          {s1} {s2} {s3}
        </h1>
        <h1>{winner ? "Winner!" : "Loser"} </h1>
      </div>
    );
  }
}
