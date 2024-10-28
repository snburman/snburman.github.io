import React from "react";

const defaultWindow = {width: 1366, height: 784}

export function useWindowSize() {
    const Window = typeof window !== "undefined" ? window : undefined;
    const [windowSize, setWindowSize] = React.useState(
        Window
            ? { width: Window.innerWidth, height: Window.innerHeight }
            : defaultWindow
    );

    React.useEffect(() => {
        function handleResize() {
            setWindowSize(
                Window
                    ? { width: Window.innerWidth, height: Window.innerHeight }
                    : defaultWindow
            );
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [Window]);

    return windowSize;
}