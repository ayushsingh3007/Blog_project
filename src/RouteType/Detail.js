import "./Details.css"
import React, { useContext } from 'react';
import { Store } from '../ContextStore/Storing';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Detail = () => {
  const [dataContext] = useContext(Store);
  const navigate = useNavigate();
  const { id, category } = useParams();

  const selectedItem = dataContext.find(item => item.id === parseInt( id, 10));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const categoryData = dataContext.filter(item => item.cat === category).slice(0, 3); 
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div id="top-div">
        <span id="account-info"><img src="https://w7.pngwing.com/pngs/215/58/png-transparent-computer-icons-google-account-scalable-graphics-computer-file-my-account-icon-rim-123rf-symbol-thumbnail.png" alt="not found" id="account-icon"/></span>
        <h2>{selectedItem.name}</h2>
        <img src={selectedItem.img} alt='not there' id='top-img' />
        <p>{selectedItem.story}</p>
      </div>

      <div id="flex">
        {categoryData.map((item, index) => (
          <Link to={`/details/${item.id}/${item.cat}`} key={index} id="flex-item" className="cat-link">
            <img src={item.img} alt='not there' id="cat-img" />
            <h4>{item.name}</h4>
            <p>{item.story.slice(0, 159)}....</p>
          </Link>
        ))}
      </div>
      <button onClick={handleBackClick} id="Back">Go Back</button>
      
  
    </div>
  );
}

export default Detail;
