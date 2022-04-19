import { createContext, useContext } from 'react';

interface IMenuContext {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<boolean>;
}

const MenuContext = createContext<IMenuContext>({
  menuOpen: true,
  setMenuOpen: () => {
    return null;
  },
});

const useMenuContext = (): IMenuContext => {
  return useContext(MenuContext);
};

export { useMenuContext };
export default MenuContext;
