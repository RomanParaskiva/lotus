import React, { useState, useEffect } from "react";

const Table = ({
  users,
  currentTurn,
  timeToEnd,
  activeUser,
}: {
  users: string[][];
  currentTurn: number;
  timeToEnd: number;
  activeUser?: number;
}) => {
  const [secondsUntilEndOfTurn, setSecondsUntilEndOfTurn] = useState(timeToEnd);
  const [turn, setTurn] = useState(currentTurn);
  const numParticipants = users.length;
  const timePerTurn = 120;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTurn((prev) => (prev + 1) % numParticipants);

      setSecondsUntilEndOfTurn(() => timePerTurn);
    }, secondsUntilEndOfTurn * 1000);

    return () => clearTimeout(timer);
  }, [turn, numParticipants, secondsUntilEndOfTurn]);

  const firstColNames = [
    "Параметры и требования",
    "Наличие комплекса мероприятий, повышающих стандарты качества изготовления",
    "Срок изготовления лота, дней",
    "Гарантийные обязательства, мес",
    "Условия оплаты",
    "Стоимость изготовления лота, руб (без НДС)",
    "Действия",
  ];

  return (
    <div className="grid tableGrid">
      <div className="grid-item">Ход:</div>
      {users.map((user, index): JSX.Element | JSX.Element[] => {
        if (index === turn) {
          return (
            <Counter key={index + "turn"} seconds={secondsUntilEndOfTurn} />
          );
        } else {
          return <div key={index + "turn"} className="grid-item"></div>;
        }
      })}
      {firstColNames.map((_item, _idx): JSX.Element | JSX.Element[] => (
        <div key={_idx + "row"} className="grid-item__wrapper">
          <div className="grid-item">{_item}</div>
          {users.map((user, index) => (
            <div
              key={index + "item"}
              className={`grid-item ${
                activeUser === index + 1 ? " text-blue-600 bg-white" : ""
              }`}
            >
              {user[_idx]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Counter = ({ seconds }: { seconds: number }) => {
  const [sec, setSec] = useState(seconds);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSec((prev) => prev - 1);
      if (sec <= 0) clearTimeout(timeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [sec, seconds]);

  return (
    <div className="grid-item current-turn">
      00 :{" 0" + Math.floor(sec / 60)} :{" "}
      {Math.floor(sec % 60) < 10
        ? "0" + Math.floor(sec % 60)
        : Math.floor(sec % 60)}
    </div>
  );
};

export default Table;
