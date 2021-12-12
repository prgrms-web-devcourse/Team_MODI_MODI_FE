import { styled } from '@mui/system';
import { Box } from '@mui/system';

const CardDesign = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {Array.from({ length: 4 }, (_, i) => i).map(i => (
        <Circle key={i} index={i} />
      ))}
    </Box>
  );
};

const Circle = styled('span')`
  display: block;
  position: absolute;
  top: 0;
  width: 250px;
  height: 250px;
  background: black;
  border-radius: 50%;
  transform-origin: 125px 0;
  filter: blur(80px);
  opacity: 0.4;
  transform: ${({ index }) => {
    const Deg = index * 90;

    return `rotate(calc(${Deg}deg))`;
  }};

  &: nth-child(1) {
    background: #01b2fe;
  }

  &: nth-child(2) {
    background: #ff008c;
  }

  &: nth-child(3) {
    background: #ffcd00;
  }

  &: nth-child(4) {
    background: #00c456;
  }
`;
export default CardDesign;
