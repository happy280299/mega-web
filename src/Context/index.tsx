/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface StoreContextValue {
  isDesktop: any;
  isTablet: any;
  isMobile: any;
}
interface Props {
  children: ReactNode;
}
export const ContextProviderWrapper = createContext<StoreContextValue | null>(
  null
);
export const ContextProvider: React.FC<Props> = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ maxWidth: 1023, minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ContextProviderWrapper.Provider
      value={{
        isDesktop,
        isTablet,
        isMobile,
      }}
    >
      {children}
    </ContextProviderWrapper.Provider>
  );
};
