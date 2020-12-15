import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {pokemon: []}
  renderPokemon = []

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response=>response.json())
    .then(pokemon => {
      this.renderPokemon = pokemon
      this.setState({ pokemon })
    })
  }

  searchPokemon = event => {
    const input = event.target.value;
    const pokemon = this.renderPokemon;

    const pokemonResults = pokemon.filter(pokeman => {
      if(pokeman.name.includes(input)){
        return pokeman
      }
    })

    this.setState({ pokemon: pokemonResults })
  }

  createPokemon = pokemon => {
    this.renderPokemon = [...this.renderPokemon, pokemon];
    this.setState({pokemon: this.renderPokemon})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search searchPokemon={this.searchPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
