import { useMemo } from 'react'

interface AverageColor {
    red: number;
    green: number;
    blue: number;
}

function useAverageColor(imageElement: string): AverageColor | null {

    const averageColor = useMemo(() => {
        if (!imageElement) return null
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageElement;

        // await new Promise((resolve) => {
        //     img.onload = resolve;
        // });

        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Unable to get context");
        }

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width || 100, canvas.height || 100);
        const data = imageData.data;

        let red = 0;
        let green = 0;
        let blue = 0;

        for (let i = 0; i < data.length; i += 4) {
            red += data[i];
            green += data[i + 1];
            blue += data[i + 2];
        }

        const pixels = data.length / 4;
        const averageRed = Math.round(red / pixels);
        const averageGreen = Math.round(green / pixels);
        const averageBlue = Math.round(blue / pixels);

        return {
            red: averageRed,
            green: averageGreen,
            blue: averageBlue,
        }
    }, [imageElement])

    return averageColor;
}

export default useAverageColor
