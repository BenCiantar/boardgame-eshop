import React from "react";
import * as config from "../../config";

export default class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newItemDetails = {
            "title": e.target.title.value,
            "image": e.target.image.value,
            "publisher": e.target.publisher.value,
            "collection": e.target.collection.value,
            "price": e.target.price.value,
            "isExpansion": e.target.expansion.value,
            "minPlayers": e.target.minplayers.value,
            "maxPlayers": e.target.maxplayers.value,
            "numInStock": e.target.numinstock.value,
            "description": e.target.description.value, 
            "category": e.target.category.value,
            "language": e.target.language.value,
            "releaseDate": e.target.release.value 
        }

        fetch(`${config.API_BASE_URL}/add-item`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemDetails),
        })
        .catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <div className="warehouse-section">
                <div className="collapsible-header">
                    Add An Item
                </div>
                <div className="collapsible">
                    <div className="collapsible-item-content">
                        <div id="add-item-section">
                            <form onSubmit={this.handleSubmit} method="post" id="add-item-form">
                                <div id="add-item-container">
                                    <label htmlFor="title"><h4>Title</h4></label>
                                    <input type="text" placeholder="Enter Title" name="title" required />

                                    <label htmlFor="image"><h4>Image URL</h4></label>
                                    <input type="text" placeholder="Enter Image URL" name="image" required />

                                    <label htmlFor="publisher"><h4>Publisher</h4></label>
                                    <input type="text" placeholder="Enter Publisher" name="publisher" required />

                                    <label htmlFor="collection"><h4>Collection</h4></label>
                                    <input type="text" placeholder="Enter Collection" name="collection" required />

                                    <label htmlFor="price"><h4>Price</h4></label>
                                    <input type="number" placeholder="Enter Price in Kr" name="price" required />

                                    <label htmlFor="expansion"><h4>Expansion?</h4></label>
                                    <input type="checkbox" name="expansion" />

                                    <label htmlFor="minplayers"><h4>Minimum Players</h4></label>
                                    <input type="number" min="1" placeholder="Minimum Players" name="minplayers" required />

                                    <label htmlFor="maxplayers"><h4>Maximum Players</h4></label>
                                    <input type="number" min="1" placeholder="Maximum Players" name="maxplayers" required />

                                    <label htmlFor="numinstock"><h4>Number in Stock</h4></label>
                                    <input type="number" placeholder="Number in Stock" name="numinstock" required />

                                    <label htmlFor="description"><h4>Item Description</h4></label>
                                    <input type="text" placeholder="Item Description" name="description" required />

                                    <label htmlFor="category"><h4>Category</h4></label>
                                    <fieldset id="category">
                                        <input type="radio" value="Boardgame" name="category" />
                                        <label htmlFor="Boardgame">Boardgame</label><br />
                                        <input type="radio" value="Card Game" name="category" />
                                        <label htmlFor="Card Game">Card Game</label><br />
                                        <input type="radio" value="RPG" name="category" />
                                        <label htmlFor="RPG">RPG</label><br />
                                        <input type="radio" value="Other" name="category" />
                                        <label htmlFor="Other">Other</label>
                                    </fieldset>

                                    <label htmlFor="language"><h4>Language</h4></label>
                                    <input type="text" placeholder="Language" name="language" required />

                                    <label htmlFor="release"><h4>Release Date</h4></label>
                                    <input type="date" name="release" required />

                                    <button type="submit" value="submit">Add Item</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

