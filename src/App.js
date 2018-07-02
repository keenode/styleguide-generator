import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import StyleGuide from './containers/StyleGuide/StyleGuide'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/styleguide" exact component={StyleGuide} />
        </Switch>
      </Layout>
    )
  }
}

export default App
