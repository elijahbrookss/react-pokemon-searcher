import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  createPokemon = (e) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(this.props.createPokemon)
  }

  updateState = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.createPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid  onChange={this.updateState} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid  onChange={this.updateState} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid  onChange={this.updateState} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid  onChange={this.updateState} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
