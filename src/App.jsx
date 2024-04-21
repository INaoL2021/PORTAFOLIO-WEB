import './App.css';
import 'boxicons';
import MidSection from './components/mid-sec/MidSection';
import RightLeftsec from './components/RightLeft-sec/RightLeft-sec';

function App() {
  return (
    <>
      <div className='sections-container'>
        <MidSection />
        <RightLeftsec />
      </div>
    </>
  )
}

export default App
