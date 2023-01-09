import { styled } from "../../../../styles";

export const Container = styled('div', {
  width: '22.375rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.81rem',

  backgroundColor: '$violet700',
  borderRadius: 8,

  padding: '1.81rem',
})

export const InfoContainer = styled('div', {
  display: 'flex',

  gap: '1.81rem',
  alignItems: 'center',
})

export const TextContainer = styled('div', {
  display: 'flex',
  gap: '0.25rem',
  flexDirection: 'column',

  strong: {
    fontSize: '1.5rem',
    color: '$gray100'
  },

  span: {
    fontSize: '1.19rem',
    color: '$gray500',
  }
})