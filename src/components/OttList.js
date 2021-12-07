import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import OttItem from './OttItem';
import { useEffect, useState } from 'react';

const OttList = ({ ottServices, currentOttId, onSelectOtt }) => {
  const [selectedId, setSelectedId] = useState(0);
  const handleSelectOtt = ottId => {
    setSelectedId(ottId);
    onSelectOtt(ottId);
  };

  useEffect(() => {
    setSelectedId(currentOttId);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 8,
      }}
    >
      {ottServices.map(({ ottId, ottName }) => (
        <OttItem
          key={ottId}
          ottId={ottId}
          ottName={ottName}
          selected={ottId === selectedId}
          onSelectOtt={handleSelectOtt}
        />
      ))}
    </Box>
  );
};

OttList.propTypes = {
  ottServices: PropTypes.array,
  onSelectOtt: PropTypes.func,
  currentOttId: PropTypes.number,
};

export default OttList;
