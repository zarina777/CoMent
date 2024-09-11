import { createContext, useState } from "react";

const ContextCategory = createContext();
function ContextProvide({ children }) {
  const [categoryOn, setCategoryOn] = useState("all");
  const [resourceOn, setResourceOn] = useState("podcasts");

  return (
    <ContextCategory.Provider
      value={{ categoryOn, setCategoryOn, resourceOn, setResourceOn }}
    >
      {children}
    </ContextCategory.Provider>
  );
}

export { ContextCategory, ContextProvide };
