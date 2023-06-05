import './App.scss';
import { Button } from 'antd';

function App(): JSX.Element {
  return (
    <>
      <div className="app">万里长城第一步</div>
      <div className="bg-red-400 w-24">万里长城第2 步</div>
      <Button>Default Button</Button>
    </>
  );
}

export default App;
