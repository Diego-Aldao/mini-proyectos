import styled from "styled-components";
import CardItem from "./CardItem";

const users = [
  {
    userName: "goncy.js",
    name: "Gonzalo Pozzo",
    isFollowing: true,
  },
  {
    userName: "Cristiano",
    name: "Cristiano Ronaldo",
    isFollowing: false,
  },
  {
    userName: "leomessi",
    name: "Lio Messi",
    isFollowing: true,
  },
  {
    userName: "warriors",
    name: "Golden State",
    isFollowing: false,
  },
];

const StyledCard = styled.main`
  min-width: 370px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledCard>
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <CardItem
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </CardItem>
        );
      })}
    </StyledCard>
  );
}

export default App;
