import { getUser } from "components/modules/authThunk";
import { useAppSelector, useAppDispatch } from "hooks";
import { useEffect } from "react";
import { checkIfTokenExists } from "util/util";

export const useAuth = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      if (checkIfTokenExists()) {
        dispatch(getUser());
      }
    }
  }, [user]);
};
