// @ts-check
import { useCallback, useState } from "react";

/**
 * @returns {[string, (path: string) => void]}
 */
const useHistory = () => {
  console.log("window.location.pathname = ", window.location.pathname);
  const [pathName, setPathName] = useState(window.location.pathname);

  const navigate = useCallback(
    (newPathName) => {
      console.log([{ key: Math.random().toString(32) }, "", newPathName]);
      window.history.pushState(
        { key: Math.random().toString(32) },
        "",
        newPathName
      );
      setPathName(newPathName);
    },
    [setPathName]
  );

  return [pathName, navigate];
};

export default useHistory;
