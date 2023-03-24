import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #fff;
  margin-bottom: 10px;
`;

const DosageAnalysis = ({ injections }) => {
  const totalDosage = injections.reduce((sum, injection) => sum + (injection.dosage || 0), 0);

  return (
    <ProfileContainer>
      <Title>User Dosage Profile</Title>
      <Text>Total injections: {injections.length}</Text>
      <Text>Total dosage: {totalDosage} mg</Text>
    </ProfileContainer>
  );
};

export default DosageAnalysis;
