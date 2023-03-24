// components/BluetoothDeviceList.js
import React, { useState } from 'react';
import styled from 'styled-components';

const DeviceListContainer = styled.div`
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const DeviceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DeviceItem = styled.li`
  color: #fff;
  border-bottom: 1px solid #34495e;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const ConnectButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

const BluetoothDeviceList = () => {
  const [devices] = useState([
    { id: 1, name: 'Device 1' },
    { id: 2, name: 'Device 2' },
    { id: 3, name: 'Device 3' },
  ]);

  const handleConnect = (device) => {
    // Simulate connecting to a Bluetooth device
    alert(`Connected to ${device.name}`);
  };

  return (
    <DeviceListContainer>
      <Title>Bluetooth Devices</Title>
      <DeviceList>
        {devices.map((device) => (
          <DeviceItem key={device.id}>
            {device.name}
            <ConnectButton onClick={() => handleConnect(device)}>
              Connect
            </ConnectButton>
          </DeviceItem>
        ))}
      </DeviceList>
    </DeviceListContainer>
  );
};

export default BluetoothDeviceList;
