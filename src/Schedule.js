import React, { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { MatchHistory, SubstitutionsRequest, Teams, Players } from './models';
import { DataStore } from 'aws-amplify';



export function Schedule() {
  const [games, setGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const gameData = await DataStore.query()
      setGames(gameData);
      const nextGameIndex = gameData.findIndex(game => game.date > new Date());  // Find the next game's index
      setCurrentIndex(nextGameIndex - 1); // set to the game before the next upcoming game
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav variant="tabs" activeKey={currentIndex} onSelect={k => setCurrentIndex(Number(k))}>
        {games.map((game, index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey={index}>Week {index + 1}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Button onClick={() => {
        const nextGameIndex = games.findIndex(game => game.date > new Date());
        setCurrentIndex(nextGameIndex - 1);
      }}>Today</Button>

      {games[currentIndex] && (
        <Card>
          <Card.Header>Week {currentIndex + 1}</Card.Header>
          <Card.Body>
            <Card.Title>{games[currentIndex].teamA} vs {games[currentIndex].teamB}</Card.Title>
            <Card.Text>Date: {new Date(games[currentIndex].date).toLocaleDateString()}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}