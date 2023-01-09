import { styled } from "../../styles";
import * as Progress from '@radix-ui/react-progress';

export const ProgressBarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  width: '100%',

  justifyContent: 'center',
  alignItems: 'center',
})

export const Timer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',



  span: {
    color: '$gray300',
    fontSize: '0.875rem'
  }
})

export const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: "$gray600",
  borderRadius: '99999px',
  width: '100%',
  height: 6,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',
});

export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$gray200',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});