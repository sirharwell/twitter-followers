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

  getStyles = (prevStyles) => {
    const endValue = prevStyles.map((_,i) => {
      return i === 0
      ? this.state
      : {
        x: spring(prevStyles[i-1].x, presets.gentle),
        y: spring(prevStyles[i-1].y, presets.gentle), 
      }
    })
    return endValue
  }
  render() {
    const { followers } = this.state;
    if (followers.length) {
      return (
        <StaggeredMotion
          defaultStyles={
            followers.map(() => ({x: 0, y: 0 }))}
            styles={this.getStyles}
        >{ avatars =>

        }</StaggeredMotion>)
    }
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
