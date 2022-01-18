import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const LetterAvatar = ({ children }) => {
  const color = stringToColor(children);

  return <Avatar sx={{ backgroundColor: color }}>{children[0]}</Avatar>;
};

LetterAvatar.propTypes = {
  children: PropTypes.string.isRequired,
};
export default LetterAvatar;
