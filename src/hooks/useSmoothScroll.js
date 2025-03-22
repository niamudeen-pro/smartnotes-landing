import { useEffect } from "react";
import Lenis from "lenis";



export default function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Cleanup on unmount
        };
    }, []);
}
