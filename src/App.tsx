interface ButtonProps {
  sum: (a: number, b: number) => number;
  logMessage: (message: string) => void;

  // 👇️ turn off type checking
  doSomething: (params: any) => any;
}

function Container({sum, logMessage, doSomething}: ButtonProps) {
  console.log(sum(10, 15));

  logMessage('hello world');

  doSomething('abc');

  return <div>Hello world</div>;
}

const App = () => {
  const sum = (a: number, b: number) => {
    return a + b;
  };

  const logMessage = (message: string) => {
    console.log(message);
  };

  // ✅ Passing functions as props
  return (
    <div>
      <Container
        sum={sum}
        logMessage={logMessage}
        doSomething={logMessage}
      />
    </div>
  );
};

export default App;
