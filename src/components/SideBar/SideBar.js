import {Switch, Route} from 'react-router-dom';

const SideBar = () => (
  <main>
    <Switch>
      <Route exact path='/' component = {App}/>
      <Route path=''/>
    </Switch>
)
