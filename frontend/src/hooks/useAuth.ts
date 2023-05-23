import { getUser } from "components/modules/authThunk";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types";
import { checkIfTokenExists } from "util/util";

export const useAuthRefresh = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hasToken = checkIfTokenExists();

  useLayoutEffect(() => {
    if (hasToken) {
      dispatch(getUser());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
