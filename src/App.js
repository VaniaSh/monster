import './App.css';
import {Component} from "react";
import CardList from '../src/components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: '',
        };
        // this.handlerChange = this.handlerChange.bind(this) // не понял нуж1но понять
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({monsters: user}))
    }

    handlerChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state // оприділяєм стейт
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())) // тут буде фильтрация монстрів
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monster'
                    handlerChange={this.handlerChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
