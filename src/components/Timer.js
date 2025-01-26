import React, { useState } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TimerTitle = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const TimerDisplay = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #2ecc71;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimerCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #2ecc71;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
`;

const TimerIcon = styled.div`
  font-size: 50px;
  color: #2ecc71;
`;

const TimerMessage = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-top: 10px;
`;

const TimerButton = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  color: white;
  background-color: #f39c12;
  border: none;
  border-radius: 50px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  width: 250px;

  &:hover {
    background-color: #e67e22;
    transform: scale(1.1);
  }

  &:active {
    background-color: #d35400;
    transform: scale(1);
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const TimerInput = styled.input`
  font-size: 20px;
  padding: 10px;
  margin: 10px 0;
  width: 150px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);  // Tiempo restante
  const [isRunning, setIsRunning] = useState(false);  // Estado del temporizador
  const [inputTime, setInputTime] = useState("");  // Tiempo introducido por el usuario
  const [intervalId, setIntervalId] = useState(null);  // Id del intervalo para detener el temporizador

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  const startTimer = (duration) => {
    if (duration <= 0) return;
    setTimeLeft(duration);
    setIsRunning(true);
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          setIsRunning(false);
          alert("Time's up!");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  return (
    <TimerContainer>
      <TimerTitle>Cooking Timer</TimerTitle>

      <div>
        <TimerCircle>
          <TimerIcon>🍳</TimerIcon>
        </TimerCircle>

        <TimerDisplay>
          {timeLeft > 0 ? `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s` : "00:00"}
        </TimerDisplay>
      </div>

      <TimerMessage>Set the desired time for your recipe!</TimerMessage>

      <TimerInput
        type="number"
        value={inputTime}
        onChange={handleInputChange}
        placeholder="Enter minutes"
        disabled={isRunning}
      />
      
      <div>
        <TimerButton onClick={() => startTimer(Number(inputTime) * 60)} disabled={isRunning}>
          Start Timer
        </TimerButton>
        <TimerButton onClick={stopTimer} disabled={!isRunning}>
          Stop Timer
        </TimerButton>
      </div>
    </TimerContainer>
  );
};

export default Timer;
