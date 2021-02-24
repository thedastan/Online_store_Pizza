import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
                {
                    items &&
                    items.map((el, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${el}_${index}`}
                        >
                            {el}
                        </li>
                    ))}

            </ul>
        </div>
    )
});

Categories.propTypes = {
    activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string),
    onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {activeCategory: null, items: []};

export default Categories
