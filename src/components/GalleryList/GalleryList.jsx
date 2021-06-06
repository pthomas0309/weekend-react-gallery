// import GalleryItem
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    // Gallery list houses the GalleryItem components
    return (
        <>
            <section>
                {props.gallery.map(exhibit => {
                    // send the objects to the galleryItem component
                    return (
                        <GalleryItem key={exhibit.id} exhibit={exhibit}/>
                    )
                })}
            </section>
        </>
    )
}

export default GalleryList;