import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Header from './Header';

import { fetchAppSections } from '../actions';
import history from '../history';

class App extends React.Component{
  componentDidMount = () => {
    this.props.fetchAppSections();
  }

  render = () => {
    console.log(this.props.appSections);
    return (
    <Layout className="App">
      <Router history={history}>
        <Header/>
      </Router>
    </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    appSections: state.appSections
  }
}

export default connect(
  mapStateToProps,
  {
    fetchAppSections
  }
)(App);

// <Route path="/" exact component={Home} />
