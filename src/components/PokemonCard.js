import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props);
    const { id, name, hp, sprites } = props.pokemon
    const { front, back } = sprites;
    this.id = id
    this.name = name
    this.hp = hp
    this.front = front
    this.back = back

    this.state = {
      image: this.front
    }
  }

  rotateImage = (e) => {
    let img = e.target;
    let front = this.front;
    let back = this.back;
    this.setState({
      image: img.src === front ? back : front
    });

  }

  render() {

    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.rotateImage} src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
