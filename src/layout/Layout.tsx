import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { getLots } from "../store/slices/lotsSlice";
import { getUsers } from "../store/slices/usersSlice";

const Layout = ({ children }: { children: JSX.Element|JSX.Element[]; }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.lotsState);

  useEffect(() => {
    dispatch(getLots());
    dispatch(getUsers())
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
