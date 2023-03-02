import { createContext } from 'react';

export const DependencyContext = createContext({});

interface Props {
  children: any;
  services: any;
}

export function DependencyProvider({ children, services }: Props) {
  return (
    <DependencyContext.Provider value={services}>
      {children}
    </DependencyContext.Provider>
  );
}
