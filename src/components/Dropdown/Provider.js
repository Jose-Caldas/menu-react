import React, { createContext, useCallback, useEffect, useState } from "react";

const Context = createContext();

export function DropdownProvider({ children }) {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);

  const rgisterOption = useCallback(
    ({
      id,
      optionDimensions,
      optionCenterX,
      WrapperContent,
      backgroundHeight,
    }) => {
      setOptions((items) => [
        ...items,
        {
          id,
          optionDimensions,
          optionCenterX,
          WrapperContent,
          backgroundHeight,
        },
      ]);
    },
    [setOptions]
  );
  const updateOptionProps = useCallback(
    (optionId, props) => {
      setOptions((items) =>
        items.map((item) => {
          if (item.id === optionId) {
            item = { ...item, ...props };
          }
          return item;
        })
      );
    },
    [setOptions]
  );
  const getOptionById = useCallback(
    (id) => options.find((item) => item.id === id),
    [options]
  );
  const deleteOptionById = useCallback(
    (id) => {
      setOptions((items) => items.filter((item) => item.id !== id));
    },
    [setOptions]
  );

  useEffect(() => {
    if (targetId !== null) setCachedId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        rgisterOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cachedId,
        setCachedId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
