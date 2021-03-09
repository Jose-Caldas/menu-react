import React, { useCallback, useLayoutEffect, useState } from "react";

const getDimensions = (element) => element.getBoundingClientRect();

export function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = useState(null);
  const [element, setElement] = useState(null);

  const hook = useCallback((e) => setElement(e), []);

  useLayoutEffect(() => {}, []);

  return [hook, dimensions, element];
}

// video 1:01:23
