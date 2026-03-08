import { createContext } from "react";

export const AuthContext = createContext();
//basicamente crea un objeto con dos propiedades:
//  Provider y Consumer.
//El Provider es un componente que se utiliza para envolver la parte de la app
//  que necesita acceder al contexto de autenticación.
//El Consumer es un componente que se utiliza para consumir el contexto dentro
//  de los componentes hijos del Provider.
