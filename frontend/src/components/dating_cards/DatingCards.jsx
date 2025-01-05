import { useState, useEffect } from "react";
import "./datingCards.css";
import DatingCard from "react-tinder-card";
import instance from "../axios";

const DatingCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await instance.get("/dating/cards");
        console.log("Fetched data:", req.data); // Log the response data
        setPeople(
          req.data.map((item) => ({
            name: item.name,
            imgUrl: item.imgUrl,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className="datingCards">
      <div className="datingCards_container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
