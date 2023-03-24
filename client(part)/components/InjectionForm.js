import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

const InjectionForm = ({ onAdd }) => {
  const [user, setUser] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dosage) {
      alert('Please provide a dosage value.');
      return;
    }

    onAdd({
      user,
      medication,
      dosage: parseInt(dosage, 10),
      timestamp: new Date().toISOString(),
    });

    setUser('');
    setMedication('');
    setDosage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Medication"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Dosage (mg)"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <Button type="submit">Add Injection</Button>
    </Form>
  );
};

export default InjectionForm;
