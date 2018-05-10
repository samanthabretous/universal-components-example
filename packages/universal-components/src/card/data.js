import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components/primitives';

const Container = styled.View`
  background-color: #ffffff;
  height: 450px;
  overflow: hidden;
  position: relative;
  width: 300px;
`;

const Image = styled.Image`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

const ContentContainer = styled.View`
  align-items: stretch;
  flex: 1;
  padding: 16px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 8px;
`;

const SubTitle = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

const Card = ({ title, subtitle, image, style }) => (
  <Container style={style}>
    <Image source={image} />
    <ContentContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </ContentContainer>
  </Container>
);

Card.propTypes = {
  image: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Card;
