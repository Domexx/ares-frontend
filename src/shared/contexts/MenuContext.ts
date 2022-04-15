import { createContext, useContext } from 'react';

interface IMenuContext {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<boolean>;
}

const LoggedInContext = createContext<IMenuContext>({
  menuOpen: true,
  setMenuOpen: () => {
    return null;
  },
});

const useMenuContext = (): IMenuContext => {
  return useContext(LoggedInContext);
};

export { useMenuContext };
export default LoggedInContext;
