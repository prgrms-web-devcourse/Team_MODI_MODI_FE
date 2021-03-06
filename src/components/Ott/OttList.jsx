import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import OttItem from './OttItem';

const OttList = ({ ottServices, currentOttId, onSelectOtt, toggleable }) => {
  const [selectedId, setSelectedId] = useState(0);
  const handleSelectOtt = (ottId, ottName) => {
    setSelectedId(ottId);
    onSelectOtt(ottId, ottName);
  };

  useEffect(() => {
    setSelectedId(currentOttId);
  }, [currentOttId]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {ottServices.map(({ ottId, ottName }) => (
        <OttItem
          key={ottId}
          ottId={ottId}
          ottName={ottName}
          selected={ottId === selectedId}
          onSelectOtt={handleSelectOtt}
          toggleable={toggleable}
        />
      ))}
    </Box>
  );
};

OttList.propTypes = {
  ottServices: PropTypes.array,
  onSelectOtt: PropTypes.func,
  currentOttId: PropTypes.number,
  toggleable: PropTypes.bool,
};

export default OttList;
