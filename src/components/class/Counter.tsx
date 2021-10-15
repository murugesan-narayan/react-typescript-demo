import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};
//Component type arguments can be specified like blow
// export class Counter extends Component<{}, CounterState> {  //with empty props
// export class Counter extends Component<CounterProps> {  //with only props
export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 1,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
