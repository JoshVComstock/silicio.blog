import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const Icon = async () => {
  const logoBuffer = await readFile(
    join(process.cwd(), "src/assets/icon.png")
  );
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (

      <img
        src={logoBase64}
        alt="icono"
        style={{ objectFit: "contain", borderRadius: "20%" }}
      />
    ),
    { ...size }
  );
};

export default Icon;
