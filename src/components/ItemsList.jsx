import { Item } from './Item';
import { useState } from 'react';

function ItemsList(props) {
    const { items = [],
        addToCart = Function.prototype,
    } = props;

    const [selectedTag, setSelectedTag] = useState(null);

    if (!items.length) {
        return <h3>Nothing found</h3>
    }

    const handleTagSelection = (tag) => {
        setSelectedTag(tag);
    };

    return (
        <ul className='item-list'>
            {items
                .filter(item => !selectedTag || item.tags.includes(selectedTag))
                .map(item => (
                    <Item
                        key={item.id}
                        {...item}
                        addToCart={addToCart}
                        handleTagSelection={handleTagSelection}
                    />
                ))}
        </ul>
    );
}

export { ItemsList };