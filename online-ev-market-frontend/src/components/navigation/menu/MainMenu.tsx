import * as React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { mainMenuActions } from '@/store/menu/main-menu';

const MainMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const page = useSelector<RootState, string>((state) => state.mainMenu.page);

  const pageChangeHandler = (e: React.SyntheticEvent, newValue: string) => {
    dispatch(mainMenuActions.setPage(newValue));
    navigate(`${newValue}`);
  };

  React.useEffect(() => {
    dispatch(mainMenuActions.setPage(location.pathname));
  }, []);

  return (
    <Tabs value={page} onChange={pageChangeHandler} aria-label="main menu">
      <Tab icon={<HomeIcon />} label="HOME" value="/" />
      <Tab icon={<DirectionsCarIcon />} label="Cars for Sale" value="/cars" />
      <Tab
        icon={<LibraryAddCheckIcon />}
        label="Advanced Search"
        value="/advanced-search"
      />
      <Tab icon={<MonetizationOnIcon />} label="Sell Your Car" value="/sell" />
      <Tab icon={<FavoriteIcon />} label="Saved Cars" value="/favorites" />
    </Tabs>
  );
};

export default MainMenu;
