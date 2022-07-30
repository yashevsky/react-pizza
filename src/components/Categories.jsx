import React from 'react'

export const Categories = () => {
    const [activeCategory, setActiveCategory] = React.useState(0)

    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    const onClickCategory = (category) => {
      setActiveCategory(category)
    }

    return (
      <div className="categories">
        <ul>
          {
            categories.map((value, i) => (
              <li key={i} onClick={() => onClickCategory(i)} 
              className={activeCategory === i ? 'active' : ''}>
                {value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  };

  export default Categories