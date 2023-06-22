import { Title } from './components/Title/Title';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Categories } from './components/Categories/Categories';
import { Project_Container } from "./components/Project_Container/Project_Container";
import { category_list } from './data/projects';
import { useState } from 'react';
import './App.css';

function App() {
  const [filtCategory, setFiltCategory] = useState(category_list[0])
  const [page, setPage] = useState(1);
  
  return (
    <>
      <header>
        <Title name="{Jocad}" subt="Frontend Mentor Solutions"/>
        <SearchBar pholder= "Search"/>
        <Categories 
        categ={category_list}
        setFiltCategory={setFiltCategory}
        setPage={setPage}
        />
      </header>
      <Project_Container filtCategory={filtCategory} page={page} setPage={setPage}/>
    </>
  )
}

export default App







