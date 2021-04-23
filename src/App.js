import React, { Fragment } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component.jsx'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      loading: true
    }
  }
  async componentDidMount() {
    try {
      const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      setTimeout(() => {
        this.setState({ monsters: users, loading: false });
      }, 800)
      console.log(users);
    } catch (e) {
      console.warn(e);
    }
  }
  onSearchChange = async (event) => {
    this.setState({ searchValue: event.target.value, loading: true }, async () => {
      const value = this.state.searchValue;
      const regex = new RegExp(`^(${value.toLowerCase()})`);
      const filteredMonsters = (await (await fetch('https://jsonplaceholder.typicode.com/users')).json()).filter(monster => {
        return monster.name.toLowerCase().match(regex);
      })
      this.setState({monsters: filteredMonsters, loading: false})
    });
  }
  
  render() {
    return (
      <Fragment>
      <div className="App">
        <header>
          <h1>Monsters Rolodex</h1>
          <div className="header-search">
            <SearchBox placeholder="search monsters" onSearchChange={this.onSearchChange}></SearchBox>
          </div>
        </header>
        {
          this.state.loading ? (
            <div>Loading</div>
          ) : (
            <CardList monsters={this.state.monsters} />
          )
        }
      </div>
      </Fragment>
    );
  }
}
// module.exports.App = App
export default App;
