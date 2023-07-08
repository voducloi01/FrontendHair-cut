import React from 'react';
import ReactDOM from 'react-dom';
import './SeachDialog.scss';

const SearchDialog = (props) => {
  return ReactDOM.createPortal(
    <div className="wrapper_search">
      <div className="wrapper_search">
        <div className="text_search">
          <input type="text" className="search" placeholder=" Tìm Kiếm...." size="30" />
        </div>
      </div>
      <div className="wrapper_imgclose">
        <img
          src="./close.png"
          alt="close"
          className="imgclose"
          onClick={props.handleCloseSearchDialog}
        />
      </div>
    </div>,
    document.querySelector('body')
  );
};

export default SearchDialog;
