import { GetServerSideProps } from "next";

import LotView from ".";

export type Data = {
  id: number;
  userId: number;
};

const UserPage = ({ data }: { data: Data }) => {
  return (
    <LotView
      data={{
        id: data.id,
        userId: data.userId,
      }}
    />
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  return {
    props: {
      data: {
        id: Number(context?.params?.id),
        userId: Number(context?.params?.userid),
      },
    },
  };
};
