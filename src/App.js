import React, { useState } from "react";
import "./App.css";

const goodBook = {
  Polity: [
    {
      id: "A",
      name: "Indian Polity by M Laxmikant",
      rating: "5/5",
      about:
        "This book itself need no introduction. It is one of the most famous and comprehensive book on subject of indian polity. ",
    },
    {
      id: "B",
      name: "Indian Governance by M Lamikant",
      rating: "4.5/5",
      about:
        "This book is extremely relevant for those interested in understanding the evolving dynamics of governance in the country",
    },
    {
      id: "C",
      name: "Indian Constitution by D D Basu",
      rating: "4.5/5",
      about:
        "This book gives a systemic exposition of the constitutional document, arranged under logical chapters and headings",
    },
  ],
  Millionaire: [
    {
      id: "A",
      name: "Globalization of World Politics by smith & Bylis",
      rating: "5/5",
      about:
        "This book is the best selling introduction to international relation, offering the most comprehensive coverage of the key theories and global issues in world politics. ",
    },
    {
      id: "B",
      name: "Global Politics by Andrew Hywood",
      rating: "5/5",
      about:
        "This book is a major new introduction to international relation and global politics.",
    },
    {
      id: "C",
      name: "Clash Of Civilization by Samuel P Huntington",
      rating: "4/5",
      about:
        "Samuel P. Huntington, one of the world's most influential thinkers, argues in this seminal book that conflicts between different cultural civilization are the greatest threat to world peace. ",
    },
  ],
  History: [
    {
      id: "A",
      name: "India's Struggle for independence:1857-1947 by Bipin Chandra",
      rating: "4.5/5",
      about:
        "This book is your go to book for an in-depth and detailed overview on Indian independence movement.",
    },
    {
      id: "B",
      name: "Ancient India: From the Stone Age to the 12th Century by Upinder Singh ",
      rating: "4/5",
      about:
        "This book describes the original sources such  as ancient texts, artefact, inscriptions and coins.",
    },
    {
      id: "C",
      name: "Medieval India by Satish Chandra",
      rating: "3.5/5",
      about:
        "In this book author explain concept like mughal empire and about medieval india.",
    },
  ],
};

export default function App() {
  const [selection, setSelection] = useState("History");

  function btnClicked(e) {
    setSelection(e.target.innerText);
  }
  return (
    <>
      <div className="App">
        <h1>????goodBooks</h1>
        <p>
          Checkout my favorite books of below genre. Select a genre to know my
          favorite books of that genre.
        </p>
        <div>
          <button onClick={btnClicked} className="btn">
            Polity
          </button>
          <button onClick={btnClicked} className="btn">
            Millionaire
          </button>
          <button onClick={btnClicked} className="btn">
            History
          </button>
        </div>
        {goodBook[selection].map((books) => {
          return (
            <div key={books.id} className="container">
              <h3>{books.name}</h3>
              <p>Famous for: {books.about}</p>
              <p>
                Rating: <b>{books.rating}</b>
              </p>
            </div>
          );
        })}
      </div>

      <footer className="footer">
        <p>Copyright @ Atul</p>
      </footer>
    </>
  );
}
