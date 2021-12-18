import { styled } from '@mui/system';
import { Box } from '@mui/material';

const ScrollWrapper = styled(Box)`
  overflow: auto;
  flex-grow: 1;
  padding-right: 12px;
  margin-right: -12px;
  &::-webkit-scrollbar {
    width: 8px;
    margin-right: -12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bbbbbb;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
  }
`;

export default ScrollWrapper;
