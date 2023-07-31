import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import Counter from './componenets/Counter.jsx'
import Bonus from './componenets/Bonus.jsx'

function App() {
  const inc = useSelector(state => state.counter.value)
  const bonusInc = useSelector(state => state.bonus.point)

  return (
    <>
      <div className='App'>
        <h2>App</h2>
        <h1>Counter:{inc}</h1>
 </div >
      <Counter />
      <Bonus />
      <h3>Total Points:{ bonusInc}</h3>
      </>
  )
}

export default App
