import React, { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []); // Empty dependency array to ensure effect runs only once

  return completion;
};

export default useScrollProgress;
