import React from 'react';

// Styles
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  component: {
    backgroundColor: 'white',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

// Function component
function Greeting() {
  return (
    <div style={styles.component}>
      <h2 style={{color: '#2196F3'}}>Function Component</h2>
      <p>Greeting</p>
    </div>
  );
}

// Class component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div style={styles.component}>
        <h2 style={{color: '#FF9800'}}>Class Component - Counter</h2>
        <p>You've clicked {this.state.count} times</p>
        <button style={styles.button} onClick={this.incrementCount}>Click me</button>
      </div>
    );
  }
}

// App component
function App() {
  return (
    <div style={styles.app}>
      <h1 style={{textAlign: 'center', color: '#4CAF50'}}>Lab 4</h1>
      <Greeting />
      <Counter />
    </div>
  );
}

export default App;