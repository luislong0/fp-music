import { styled } from "../../styles";

export const Container = styled('div', {
  maxWidth: '65rem',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: "fixed",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})


export const PlayerContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
})


export const MediumAndSmallContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@bp1': {
    display: 'none',
  },
})