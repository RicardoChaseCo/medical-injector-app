import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InjectionForm from './components/InjectionForm';
import InjectionList from './components/InjectionList';
import styled, { createGlobalStyle } from 'styled-components';
import DosageAnalysis from './pages/Profile';
import BluetoothDeviceList from './components/BluetoothDeviceList';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const FormAndListContainer = styled.div`
  flex: 1;
  min-width: 400px;
`;

function App() {
  const [injections, setInjections] = useState([]);

  useEffect(() => {
    fetchInjections();
  }, []);

  const fetchInjections = async () => {
    try {
      const response = await axios.get("/api/injections");
      setInjections(response.data);
    } catch (error) {
      console.error("Error fetching injections:", error);
    }
  };

  const addInjection = async (injection) => {
    try {
      const response = await axios.post("/api/injections", injection);
      setInjections([...injections, response.data]);
      // console.log("Updated injections:", [...injections, response.data]);
    } catch (error) {
      console.error("Error adding injection:", error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <h1>Medical Injector App</h1>
        <MainContent>
          <FormAndListContainer>
            <InjectionForm onAdd={addInjection} />
            <InjectionList injections={injections} />
          </FormAndListContainer>
          <DosageAnalysis injections={injections} />
          <BluetoothDeviceList />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
