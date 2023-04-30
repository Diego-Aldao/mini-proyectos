import styled from "styled-components";
import { useState } from "react";

const StyledItem = styled.section`
  width: 100%;
  flex: 1 1 25%;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 5px;
  .card-item-contenedor-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: red;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-item-datos {
    flex: 1 1 30%;
    p {
      font-size: 14px;
    }
  }
  .card-item-username {
    color: #bbbbbb;
    font-size: 14px;
  }
  button {
    padding: 5px 15px;
    border-radius: 15px;
    text-transform: capitalize;
    cursor: pointer;
    border: 1px solid white;
  }
  .card-item-boton-siguiendo {
    background: none;
    color: white;
  }
  .card-item-dejar-de-seguir {
    display: none;
    color: red;
  }
  .card-item-boton-siguiendo {
    min-width: 150px;
    transition: all 0.2s ease-in-out;
  }
  .card-item-boton-siguiendo:hover .card-item-dejar-de-seguir {
    display: block;
  }
  .card-item-boton-siguiendo:hover .card-item-span-siguiendo {
    display: none;
  }
  .card-item-boton-siguiendo:hover {
    border: 1px solid red;
    background: #ff00002b;
  }
`;

export function CardItem({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "siguiendo" : "seguir";

  const handleClick = () => {
    setIsFollowing((prevFollowing) => !prevFollowing);
  };

  return (
    <StyledItem>
      <div className="card-item-contenedor-img">
        <img src={`https://unavatar.io/instagram/${userName}`} alt="" />
      </div>
      <div className="card-item-datos">
        <p>{children}</p>
        <p className="card-item-username">@{userName}</p>
      </div>
      <button onClick={handleClick} className={`card-item-boton-${text}`}>
        <span className={`card-item-span-${text}`}>{text}</span>
        <span className="card-item-dejar-de-seguir">dejar de seguir</span>
      </button>
    </StyledItem>
  );
}

export default CardItem;
