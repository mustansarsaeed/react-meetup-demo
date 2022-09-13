import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetupsPage() {
  const navigate = useNavigate();
  function handleNewMeetup(meetup) {
    fetch(
      "https://react-getting-started-9093f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={handleNewMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
