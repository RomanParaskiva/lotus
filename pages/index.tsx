import Link from "next/link";
import Head from "next/head";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/store";
import { ILot } from "../types";

const Home = () => {
  const { lots, isLoading } = useSelector(
    (state: RootState) => state.lotsState
  );
  const [lotsState, setLotsState] = useState<ILot[]>([]);

  useEffect(() => {
    if (lots.length > 0) setLotsState(lots);
  }, [lots]);

  return (
    <>
      <Head>
        <title>Lotus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex flex-col gap-10 p-10">
        <h1 className="text-2xl text-center">Выберите торги для просмотра</h1>
        {lotsState.length > 0 ? (
          lotsState.map((item) => (
            <div key={item.id}>
              <Link href={`/lot/${item.id}`}>
                Просмотр торгов на {item.lotName} от {item.startIn}
              </Link>
            </div>
          ))
        ) : (
          <div>нет доступных торгов</div>
        )}

        <Link href={"/lot/1/1"}>Пользователь 1 - лот 1</Link>
        <Link href={"/lot/1/2"}>Пользователь 2 - лот 1</Link>
        <Link href={"/lot/1/3"}>Пользователь 3 - лот 1</Link>
        <Link href={"/lot/1/4"}>Пользователь 4 - лот 1</Link>
        <Link href={"/lot/1/5"}>Пользователь 5 - лот 1</Link>
        <hr/>
        <Link href={"/lot/2/1"}>Пользователь 1 - лот 2</Link>
        <Link href={"/lot/2/2"}>Пользователь 2 - лот 2</Link>
        <Link href={"/lot/2/3"}>Пользователь 3 - лот 2</Link>
        <Link href={"/lot/2/4"}>Пользователь 4 - лот 2</Link>
        <Link href={"/lot/2/5"}>Пользователь 5 - лот 2</Link>
      </main>
    </>
  );
};

export default memo(Home);
