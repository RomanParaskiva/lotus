import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Table from "../../../src/components/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/store";
import { ILot } from "../../../types";


export type Data = {
  id: number;
  userId?: number;
};

const LotView = ({ data }: { data: Data }) => {
  const [id, setId] = useState(data.id);
  const [lotState, setLotState] = useState<ILot>();
  const lot = useSelector((state: RootState) =>
    state.lotsState.lots.find((val) => val.id === id)
  );
  const { isLoading, users } = useSelector(
    (state: RootState) => state.usersState
  );

  const _createTable = () => {
    if (lotState?.startIn && users.length > 0) {
      const date = lotState.startIn.split(" ");

      const startTime = new Date(
        `${date[0].split(".").reverse().join("-")}T${date[1]}:00`
      );

      const currentTime = new Date();

      const numParticipants = users.length;

      const timePerTurn = 2 * 60;

      const elapsedTime = (+currentTime - +startTime) / 1000;

      const numTurns = Math.floor(elapsedTime / timePerTurn);

      const currentTurn = numTurns % numParticipants;
        
      const secondsOfCurrentTurn = Math.floor(elapsedTime % timePerTurn);

      return <Table users={users} activeUser={data.userId} currentTurn={currentTurn} timeToEnd={timePerTurn - secondsOfCurrentTurn}/>
    }
  }

  useEffect(() => {
    setLotState(lot);
  }, [lot]);


  return (
    <>
      <Head>
        <title>{lotState?.lotName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="flex w-full border-b border-b-gray-600 p-5">
        <div className="text-red-400 flex gap-3">
          Ход торгов{" "}
          <strong>
            Тестовые торги на {lotState?.lotName} ({lotState?.startIn})
          </strong>
        </div>
      </header>

      <main className="p-5 w-[100vw] overflow-x-auto">
        <p className="text-red-400 bg-red-200 max-w-max p-1 mb-20">
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице:
        </p>

        {!isLoading ? (
          _createTable()
        ) : (
          <h3>Loading....</h3>
        )}
      </main>
    </>
  );
};

export default LotView;

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  let id = 0;

  if (context?.params?.id) {
    id = +context?.params?.id;
  }
  return {
    props: {
      data: {
        id,
      },
    },
  };
};
