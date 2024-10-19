import { useEffect, useRef } from "react";

export default function ClickOutside({
  children,
  exceptionRef,
  onClick,
  className,
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      let clickedInside = false;
      if (exceptionRef) {
        clickedInside =
          (wrapperRef.current && wrapperRef.current.contains(e.target)) ||
          (exceptionRef.current && exceptionRef.current === e.target) ||
          (exceptionRef.current && exceptionRef.current.contains(e.target));
      } else {
        clickedInside =
          wrapperRef.current && wrapperRef.current.contains(e.target);
      }

      if (!clickedInside) onClick();
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
}
