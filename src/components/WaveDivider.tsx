interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

export default function WaveDivider({ flip = false, color = "#FFF8F0" }: WaveDividerProps) {
  return (
    <div className="relative -mb-1 w-full leading-none" style={{ transform: flip ? "rotate(180deg)" : undefined }}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C120,128 240,0 360,64 C480,128 600,0 720,64 C840,128 960,0 1080,64 C1200,128 1320,0 1440,64 L1440,120 L0,120 Z"
          fill={color}
          className={flip ? "wave-path-reverse" : "wave-path"}
        />
      </svg>
    </div>
  );
}
