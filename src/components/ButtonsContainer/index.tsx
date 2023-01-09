import { FastForward, Pause, Play, Rewind } from "phosphor-react";
import { Container } from "./styles";

interface ButtonsContainerProps {
  togglePlayPause: () => void;
  nextMusic?: () => void;
  previousMusic?: () => void;
  isPlaying: boolean;
}

export function ButtonsContainer({ togglePlayPause, isPlaying, nextMusic, previousMusic }: ButtonsContainerProps) {
  return (
    <>
      <Container>
        <button onClick={previousMusic}><Rewind size={28} /></button>

        <button onClick={togglePlayPause}>
          {isPlaying === false ? <Play size={28} /> : <Pause size={28} />}
        </button>
        <button onClick={nextMusic}><FastForward size={28} /></button>
      </Container>
    </>
  )
}