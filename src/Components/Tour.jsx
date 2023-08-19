import React, { useState } from 'react'

const Tour = ({id,name,info,image,price, removeTour}) => {
  const changereadMore = () => {
    setReadMore(!readMore)
  }
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <div className="imageandtext">
        <img src={image} alt={name} className="img" />
        <h4 className="price">£{price}</h4>
      </div>
      <div className="tour-content">
        <h2>
          <strong>{name}</strong>
        </h2>

        {readMore ? (
          <p>
            {info}
            <button
              className="button-3"
              onClick={changereadMore}
              id="btn-special"
            >
              Read Less
            </button>
          </p>
        ) : (
          <p>
            {info.substring(1, 150)}
            <button
              className="button-3"
              style={{ padding: '4px' }}
              id="btn-special"
              onClick={changereadMore}
            >
              Read More
            </button>
          </p>
        )}
        <button className="button-3" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </article>
  );
}

export default Tour
