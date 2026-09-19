import React from 'react';
import logo from './logo.svg';

interface AppProps {
  name?: string;
}

interface AppState {
  age: number;
}
// 제너릭으로 호출하는데, 앞에서 받는것은 Props 타입으로 밖에서 받고, 뒤에서 받는것은 State 타입으로 안에서 받는다.
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      age: 30
    }
    setInterval(() => {
      this.setState({age: this.state.age + 1});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          {this.props.name} is {this.state.age} years old. 
          <button onClick={this.rollback}>회춘</button>
          <StatelessComponent name="son"/>
          나는 자식이다
          <StatelessComponent/>
      </header>
    </div>
  );
}
private rollback = () => {
  this.setState({age: 20});
}
}


const StatelessComponent = (props: AppProps) => {
  return (
    <p>
      {props.name ?? '이름없음'} is stateless component.
    </p>
  );
};

export default App;
