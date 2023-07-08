import React from 'react';
import './Header.scss';
import { Link, f7 } from 'framework7-react';
import SearchDialog from '../SearchDialog/SearchDialog';
import { useState } from 'react';
import { DATA_HEADER } from '../../../constants/constant';
const Header = () => {
  const [isShowSearchDialog, setIsShowSearchDialog] = useState(false);

  const handleCloseSearchDialog = () => {
    setIsShowSearchDialog(!isShowSearchDialog);
  };

  return (
    <div className="wrapper_header">
      <Link>
        <img src="Logo.png" alt="" className="item_logo" />
      </Link>
      {DATA_HEADER.map((e) => (
        <div
          onClick={() => {
            f7.view.main.router.navigate(e.routerName);
          }}
          className="color-theme-black title_text"
          key={e.id}>
          {e.name}
        </div>
      ))}
      <span className="seperate">|</span>

      <div className="wrapper_fb">
        <Link href="https://www.youtube.com/" external target="_blank">
          <img src="fb.png" alt="" className="fb_Image " />
        </Link>
        <Link>
          <img src="tiktok.png" alt="" className="fb_Image" />
        </Link>
        <Link>
          <img src="search.png" alt="" className="fb_Image" onClick={handleCloseSearchDialog} />
        </Link>
      </div>
      {isShowSearchDialog && <SearchDialog handleCloseSearchDialog={handleCloseSearchDialog} />}
    </div>
  );
};

export default Header;
