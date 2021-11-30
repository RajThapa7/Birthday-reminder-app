import React from "react";
import data from "./data";

export default function Content() {
  const [people, setPeople] = React.useState(data);
  const clearAll = () => {
    setPeople([]);
    setHeading("0 birthdays today");
  };
  const removeItem = (id) => {
    setPeople((people) => {
      let newItem = people.filter((person) => person.id !== id);
      return newItem;
    });
    setHeading(`${number} birthdays today`)
        number--;

  };
    let number = data.length;
  const heading = `${number} birthdays today`;
  const [head, setHeading] = React.useState(heading);
  const title = "Birthday Reminder App";

  return (
    <>
      <div>
        <h2 className="title">{title}</h2>
        <h3>{head}</h3>
      </div>
      {people.map((person) => {
        const { name, img, age, id } = person;
        return (
          <div className="content-container" key={id}>
            <img src={img} alt="" className="image" />
            <div className="info">
              <h4>{name}</h4>
              <h5>{age}</h5>
            </div>
            <button className="innerBtn" onClick={() => removeItem(id)}>
              Already Wished
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => clearAll()}>
        CLEAR ALL
      </button>
    </>
  );
}
