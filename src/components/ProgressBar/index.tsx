import useConvertTime from "../../hooks/useConvertTime";
import { ProgressBarContainer, ProgressIndicator, ProgressRoot, Timer } from "./styles";

interface ProgressBarProps {
  duration: number;
  audioProgress: number;
}

export function ProgressBar({ audioProgress, duration }: ProgressBarProps) {
  return (
    <ProgressBarContainer>
      <ProgressRoot className="ProgressRoot" defaultValue={0} max={duration}>
        <ProgressIndicator
          className="ProgressIndicator"
          style={{ transform: `translateX(${((audioProgress / duration) * 100) - (100)}%)` }}
        />
      </ProgressRoot>
      <Timer>
        <span>{useConvertTime(duration!)}</span>
        <span>{useConvertTime(audioProgress)}</span>
      </Timer>
    </ProgressBarContainer>
  )
}