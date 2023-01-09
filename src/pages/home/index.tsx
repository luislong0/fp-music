import { BigPlayerBox } from "./components/BigPlayerBox";
import { MediumPlayerBox } from "./components/MediumPlayerBox";
import { SmallPlayerBox } from "./components/SmallPlayerBox";
import { Container, MediumAndSmallContainer, PlayerContainer } from "./styles";

export default function Home() {
  return (
    <Container>
      <PlayerContainer>
        <BigPlayerBox />
        <MediumAndSmallContainer>
          <MediumPlayerBox />
          <SmallPlayerBox />
        </MediumAndSmallContainer>
      </PlayerContainer>
    </Container>
  )
}