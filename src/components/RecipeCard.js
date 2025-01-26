import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 15px;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isFavorite ? '#e74c3c' : '#ccc')};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${props => (props.isFavorite ? '#c0392b' : '#999')};
  }
`;

const RecipeCard = ({ id, title, description, photo, onClick, onFavorite, isFavorite }) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onFavorite) {
      onFavorite(id);
    }
  };

  return (
    <Card onClick={handleCardClick}>
      <ImageWrapper>
        <Image src={photo} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️ Favorites' : '♡ Add to Favorites'}
        </FavoriteButton>
      </Content>
    </Card>
  );
};

export default RecipeCard;
