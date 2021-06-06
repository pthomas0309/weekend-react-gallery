import axios from "axios";

function GalleryItem({exhibit, getGallery}) {

    // // handleTouch executes when the 'touch the art' button is clicked
    // const handleTouch = (evt) => {

    //     // stop page load and check the gallery
    //     evt.preventDefault();
    //     console.log(exhibit);
        
    //     // axios PUT the like update to the server to update the data, target by id
    //     axios.put(`/gallery/like/${exhibit.id}`)
    //     // async call brings back a response (should be 200 OK)
    //     .then(response => {

    //         // refresh the gallery display
    //         getGallery();
    //     })

    //     // bad response
    //     .catch(err => {
    //         console.log('Server Issue:', err);
    //     });
    // }

    return(
        <>
            <div>
                <img src={exhibit.path}/>
                <p>{exhibit.likes} people liked this</p>
                <button onClick={handleTouch}>Touch the Art</button>
            </div>
        </>
    )
}

export default GalleryItem;