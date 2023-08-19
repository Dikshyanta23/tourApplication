import { useEffect, useState } from 'react';
import './index.css'
import Tours from './Components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);
  // method  to fetch data from the url
  const fetchData = async () => {
    try {
          setLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          setList(data);
          setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  //remove tour
  const removeTour = (id) => {
    const newTours = list.filter((item)=> item.id !== id)
    setList(newTours)
  }
  useEffect(()=> {
    fetchData();
  },[])
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (list.length === 0) {
    return (
      <main>
        <div className="no-items">
          <h1>No items left to display</h1>
          <button onClick={fetchData} className="button-3">
            Get items
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <h1>Our Tours</h1>
      <Tours tours = {list} removeTour = {removeTour}/>
    </main>
  );
}

export default App
