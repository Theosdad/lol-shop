import { useContext } from 'react';
import { ShopContext } from '../context';
import { Item } from './Item';

export const ItemsList = () => {
    const { items = [], selectedTag, resetFilter } = useContext(ShopContext);

    if (!items.length) {
        return <h3>Nothing found</h3>
    }

    return (
        <div>
            {selectedTag ?
                <div className='filter-container'>
                    <b>Filtered with <span className='tag'>{selectedTag}</span> tag</b>
                    <span className='tag' onClick={resetFilter}>Reset filter</span>
                </div> : null
            }

            <ul className='item-list'>
                {
                    items
                        .filter(item => !selectedTag || item.tags.includes(selectedTag))
                        .map(item => (
                            <Item key={item.id} {...item} />
                        ))
                }
            </ul>
        </div>
    );
}
