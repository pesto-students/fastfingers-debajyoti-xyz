// @ts-check
import { useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("Adding popstate event listener");
    const handlePopState = () => {
      setPathName(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setPathName]);

  return [pathName, navigate];
};

export default useHistory;
