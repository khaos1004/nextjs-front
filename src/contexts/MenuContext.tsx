import { createContext } from "react";

interface MenuContextType {
    tab: {
      header: string;
      contents: string;
    };
  }

const MenuContext = createContext<MenuContextType>({
    tab:{
    header: "skyblue",
    contents: "keroro"
    }
});

export default MenuContext;
