import React from "react";
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  color: #000;
  margin-bottom: 20px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const User = styled.span`
  color: #000;
`;

const Medication = styled.span`
  color: #1a73e8;
`;

const Timestamp = styled.span`
  color: #666;
`;

const InjectionList = ({ injections }) => {
  console.log("Injections:", injections);

  return (
    <ListContainer>
      <Title>Injections</Title>
      {injections.map((injection) => (
        <ListItem key={injection.id}>
          <User>{injection.user}</User> injected <Medication>{injection.medication} ({injection.dosage} mg)</Medication> at <Timestamp>{new Date(injection.timestamp).toLocaleString()}</Timestamp>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default InjectionList;
