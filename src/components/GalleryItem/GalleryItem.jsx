import {useState} from 'react';
import axios from "axios";

function GalleryItem({exhibit, getGallery}) {

    const [hiddenDescription, setHiddenDescription] = useState(true)

    // handleTouch executes when the img element is clicked
    const handleTouch = (evt) => {

        // stop page load
        evt.preventDefault();

        // set hiddenDescription to false if true and true if false
        if (hiddenDescription){
            setHiddenDescription(false);
        } else {
            setHiddenDescription(true);
        }
    }

    // handleLike executes when the like button is clicked
    const handleLike = (evt) => {

        // stop page load and check the gallery
        evt.preventDefault();
        console.log(exhibit);
        
        // axios PUT the like update to the server to update the data, target by id
        axios.put(`/gallery/like/${exhibit.id}`)
        // async call brings back a response (should be 200 OK)
        .then(response => {

            // refresh the gallery display
            getGallery();
        })

        // bad response
        .catch(err => {
            console.log('Server Issue:', err);
        });
    }

    return(
        <>
            <div>
                {/* exhibit image, when clicked handleTouch */}
                <img onClick={handleTouch} src={exhibit.path}/>

                {/* conditional rendering for the hidden description */}
                {hiddenDescription ? (
                    <p>Click the image for its description</p>
                ) : (
                    <div>
                        Exhibit Description: {exhibit.description} <br />
                        Medium used to create: {exhibit.medium}
                    </div>
                )}

                {/* like display */}
                <p>{exhibit.likes} people liked this</p>

                {/* like button, when clicked, handleLike */}
                <button onClick={handleLike}>Like</button>
            </div>
        </>
    )
}

export default GalleryItem;