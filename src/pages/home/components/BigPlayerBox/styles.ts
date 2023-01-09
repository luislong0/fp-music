import { styled } from "../../../../styles";

export const Container = styled('div', {
  width: '16.875rem',

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$violet700',
  gap: '1.81rem',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',

  padding: '2.375rem',
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '1.5rem',
  },

  span: {
    fontSize: '1.19rem',
    color: '$gray500',
  }
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    backgroundColor: 'transparent',
    border: 'none',
  },

  svg: {
    color: '$gray100',
  }
})

