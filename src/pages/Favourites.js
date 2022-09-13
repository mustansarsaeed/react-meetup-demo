import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext, {
  FavouritesContextProvider,
} from "../store/favourites-context";

function FavouritesPage() {
  const favoritesCtx = useContext(FavouritesContext);
  let content = "";
  if (favoritesCtx.totalFavourites === 0) {
    content = "No favorites added yet.";
  } else {
    content = <MeetupList meetups={favoritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
