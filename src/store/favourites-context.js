import { createContext, useState } from "react";
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

export function FavouritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favourites: userFavorites,
    totalFavourites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleItemIsFavorite,
  };

  function handleAddFavorite(meetup) {
    console.log("handleAddFavorite: " + meetup);
    setUserFavorites((prevMeetups) => {
      return prevMeetups.concat(meetup);
    });
  }

  function handleRemoveFavorite(meetupId) {
    setUserFavorites((prevMeetups) => {
      return prevMeetups.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function handleItemIsFavorite(meetupId) {
    return userFavorites.some((meetup) => {
      return meetup.id === meetupId;
    });
  }

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
