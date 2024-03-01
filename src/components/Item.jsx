import React from 'react';

function Item(props) {
    const { id,
        name,
        icon,
        description,
        plaintext,
        tags,
        price,
        addToCart = Function.prototype,
        handleTagSelection = Function.prototype
    } = props;

    return (
        <li className="card item">
            <div className="item__image">
                <img src={icon} alt={`${name}.`} width={64} />
                <b className="item__title">{name}</b>
            </div>
            <div className="item__content">
                <i>{plaintext}</i>
                <div className='description-list'>
                    {description.map((description, index) => (
                        <div key={index} className="description">{description}</div>
                    ))}
                </div>

                <div className='tag-list'>
                    <b>Tags:&nbsp;</b>
                    {tags.map((tag, index) => (
                        <span key={index} className="tag" onClick={() => handleTagSelection(tag)}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="item__action">
                <button className="btn" onClick={() => addToCart({
                    id,
                    name,
                    price,
                })}>Purchase</button>
                <span>{price.total} ₴</span>
            </div>
        </li>
    );
}

export { Item };