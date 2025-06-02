import { TipCalculatorComponent } from './components/TipCalculatorComponent'

import styles from './App.module.scss'

import logo from './assets/logo.svg'

function App() {
  return (
    <div className={styles.app}>
      <img className={styles.logo} alt="Splitter Logo Image" src={logo}/>
      <TipCalculatorComponent />
    </div>
  )
}

export default App
