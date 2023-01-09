import { useEffect, useRef } from "react";

// Hook from https://usehooks.com/useEventListener/
export const useEventListener = (
  eventName: string,
  handler: (e: any) => void
) => {
  // Create a ref that stores handler
  const savedHandler = useRef<EventListener>();

  // Update ref.current value if handler changes.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = document.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: Event) => {
        savedHandler.current && savedHandler.current(event);
      };

      // Add event listener
      document.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        document.removeEventListener(eventName, eventListener);
      };
    },
    [eventName] // Re-run if eventName or element changes
  );

  return savedHandler;
};
