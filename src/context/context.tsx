import { createContext } from "react";
type contextType = {
  //declaring the type of the context variables
  getEmployees: () => void;
  getTasks: () => void;
};

export const Database = createContext<contextType>({
  //initializations
  getEmployees: () => {},
  getTasks: () => {},
});

export const DatabaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let getEmployees = () => {
    const Employees = localStorage.getItem("employees");
    if (Employees) {
      return JSON.parse(Employees);
    } else {
      return null;
    }
  };
  let getTasks = () => {
    const Tasks = localStorage.getItem("tasks");
    if (Tasks) return JSON.parse(Tasks);
    else return null;
  };

  return (
    <Database.Provider
      value={{
        // the variables to export
        getEmployees,
        getTasks,
      }}
    >
      {children}
    </Database.Provider>
  );
};
