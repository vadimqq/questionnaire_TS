import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Step1 } from './pages/Step1'
import { Step2 } from './pages/Step2'
import { Step3 } from './pages/Step3'
import { Result } from './pages/Result'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App
