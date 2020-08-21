import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'

import Prep from './components/Prep'
import Blog from './components/Blog'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      //console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        //console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:"Gainsboro"}}>
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p style={{textAlign:"right"}}>Logged in as <b> {this.state.username}!</b></p>
        }
        {/* Routes to different components */}
       
        <Route
          exact path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />} />
         {/* <Route 
        //   path="/login"
        //   render={() =>
        //     <LoginForm
        //       updateUser={this.updateUser}
        //     />}
        // /> */}
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          exact path="/Prep"
          render={() =>
            <Prep/>}
        />
        <Route 
          exact path="/"
          render={() =>
            <Blog
            loggedIn={this.state.loggedIn}
            username={this.state.username}
            />}
        />

      </div>
    );
  }
}

export default App;