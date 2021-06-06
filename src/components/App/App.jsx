import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';

function App() {

    // State to hold our list data
    const [galleryList, setGalleryList] = useState([]);

    // run our data getting function on page load
    useEffect( () => {
        getGallery();
    }, [])

    // retrieve gallery from server
    const getGallery = () => {
      console.log('Getting the gallery');

      // axios GET to server
      axios.get('/gallery')
      // async brings back a response
      .then(response => {

          // check the response.data for the right info
          console.log(response.data);
          // set galleryList to the val of response.data 
          setGalleryList(response.data);
      })
      
      // catch for error
      .catch(err => {
        console.log('Error getting data from the server,', err);
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <GalleryList gallery={galleryList} getGallery={getGallery}/> */}
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
