import './App.css';
import TweetContainer from '../TweetContainer/TweetContainer';

function App() {
  return (
    <>
      <div className='App'>
        <div><TweetContainer status="Stop COVID-19, Take-out only!"/></div>
        <div></div>
        <div><TweetContainer status="At home, binge watching Breaking Bad for second time!"/></div>
        <div></div>
        <div><TweetContainer status="When is the beach opening up? Can't wait.."/></div>
        <div></div>
      </div>
      
    </>
    
  );
}

export default App;
