import { styled } from "../../styles";

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '3.18rem',
  justifyContent: 'center',
  alignItems: 'center',

  button: {
    backgroundColor: 'transparent',
    border: 'none',

    '&:hover': {

    }
  },

  svg: {
    color: '$gray100',
    transition: 'all ease-in 0.1s',


    '&:hover': {
      color: '$white',
      transform: 'scale(1.1)',
    }
  }
})