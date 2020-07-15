import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: ''
    }
  }

  componentDidMount() {
    const getMonsters = async ()  => {
      const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      this.setState({monsters: users});
    }
   getMonsters();
  }


  render () {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Random Monsters</h1>
        <SearchBox placeholder='search monsters'
        handleChange={e => 
          this.setState({searchFiled: e.target.value})
          }
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
