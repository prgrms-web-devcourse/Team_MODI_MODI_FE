import { Box, styled } from '@mui/system';

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 86%;
  max-height: 90%;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  transform: translate(-50%, -50%);
  outline: none;
`;

export default ModalBox;
