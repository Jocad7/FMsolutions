import { Title } from './components/Title/Title';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Categories } from './components/Categories/Categories';
import { Project_Container } from "./components/Project_Container/Project_Container";
import './App.css';

function App() {
  return (
    <>
      <header>
        <Title name="{Jocad}" subt="Frontend Mentor Solutions"/>
        <SearchBar pholder= "Search"/>
        <Categories 
        categ={["All", "Newbie", "Junior", "Intermediate", "Advance"]}
        />
      </header>
      <Project_Container/>
    </>
  )
}

export default App







