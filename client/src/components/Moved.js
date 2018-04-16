import React from 'react';
import { Motion } from 'react-motion';

class Moved extends React.Component {
  state = {...this.props}

  componentDidMount() {
    let x = this.state.x
    let y = this.state.y
    let t = this

    setInterval( () => {
      this.moveAvatar()
    }, 100)
  }

  moveAvatar = () => {
    let { x, y, transitioned } = this.state;
    let stepX = x / 10
    let stepY = y / 10

    if (x <= 0 && y <= 0)
      this.setState({ transitioned: true });
    if (!transitioned)
      this.setState({ x: x - stepX, y: y - stepY });
  }

  render() {
    let { id, x, y, transitioned, img } = this.state;
    return (
      <Motion
        key={id}
        defaultStyle={{x: x, y: y}}
      >
        { avatars =>
          <div
            style={{
              borderRadius: '99px',
              backgroundColor: 'white',
              width: '50px',
              height: '50px',
              border: '3px solid white',
              position: 'absolute',
              backgroundSize: '50px',
              backgroundImage: `url(${img})`,
              WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
              transform: `translate3d(${x}px, ${y}px, 0)`,
              zIndex: 10
            }}
          />
        }
      </Motion>
    )
  }
}

export default Moved;
