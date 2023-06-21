import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Cardlist from "./components/card-list/card-list.component.jsx";
import Search from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("a");
  const [monsters, setMonsters] = useState([]);
  // const [title,setTitle]  = useState('')
  // console.log(monsters)
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters,searchField]);

  const onSearch = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const onTitleChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //    setTitle(searchFieldString);
  // };
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Bigelow Rules",
          fontSize: "60px",
        }}
      >
       Monsters Rolodex
      </h1>
      <Search
        onChangeHandler={onSearch}
        placeholder="search Monsters"
        className="search-box"
      />
      <br />
    {/* <Search
      onChangeHandler={onTitleChange}
      placeholder="set title"
      className="title-search-box"
      /> */}
      <Cardlist monsters={filteredMonsters}/>
    </div>

    /*<Cardlist monsters={filteredMonsters}/> */

    // class App extends React.Component {
    //   constructor() {
    //     super();
    //     this.state = {
    //       monsters: [],
    //       searchField : ''
    //     };
    //   }
    //   componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    //       response.json().then((users) =>
    //         this.setState(
    //           () => {
    //             return { monsters: users };
    //           },
    //           () => {
    //             console.log(this.state);
    //           }
    //         )
    //       )
    //     );
    //   }
    //   onSearch = (event) => {
    //     console.log(event.target.value);
    //     const searchField = event.target.value.toLocaleLowerCase();
    //     this.setState(() => {
    //       return {searchField };
    //     });
    //   }
    //   render() {
    //     const{monsters,searchField} = this.state;
    //     const{onSearch} = this;
    //     const filteredMonsters = monsters.filter((monster) => {
    //       return monster.name.toLocaleLowerCase().includes(searchField);
    //     });
    //     return (
    //       <div className="App">
    //       <h1 style={{textAlign:'center',fontFamily:'Bigelow Rules',fontSize:'60px'}}>Monsters Rolodex</h1>
    //         { /* filteredMonsters.map((monster) => {
    //           return (
    //             <div key={monster.id}>
    //               <h1>{monster.name}</h1>
    //             </div>
    //           );
    //         }) */}
    //         <Search onChangeHandler={onSearch} placeholder="search Monsters" className='search-box'/>
    //           <Cardlist monsters={filteredMonsters}/>
    //       </div>

    //     );
  );
};

export default App;
