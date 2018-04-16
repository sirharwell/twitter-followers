import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import {
  StaggeredMotion,
  spring,
  presets,
} from 'react-motion';


class Home extends Component {

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
    axios.get('/api/followers')
      .then( ({data}) => this.setState({ followers: data }) )
  }

  handleMouseMove = ({ pageX: x, pageY: y }) => {
      this.setState({ x, y })
  }
  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
