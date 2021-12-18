import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ChipItem from 'components/Common/ChipItem';

const ChipList = ({ items, onClickChip }) => {
  const [itemList, setItemList] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState(false);

  useEffect(() => {
    items && setItemList(items);
  }, [items]);

  const handleClickChip = generatedUsername => {
    setSelectedUsername(generatedUsername);
    onClickChip(generatedUsername);
  };

  return (
    <Box>
      {itemList.map(({ generatedUsername }, index) => (
        <ChipItem
          key={index}
          chipName={generatedUsername}
          selected={generatedUsername === selectedUsername}
          onClickChip={handleClickChip}
        />
      ))}
    </Box>
  );
};

ChipList.propTypes = {
  items: PropTypes.array,
  selectedUsername: PropTypes.string,
  onClickChip: PropTypes.func,
};

export default ChipList;
