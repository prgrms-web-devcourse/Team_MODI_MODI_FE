import PropTypes from 'prop-types';

const { Chip } = require('@mui/material');

const ChipItem = ({ chipName, selected, onClickChip }) => {
  return (
    <Chip
      sx={{
        m: 0.5,
        fontWeight: 600,
      }}
      label={chipName}
      component="button"
      clickable={true}
      color={selected ? 'primary' : 'default'}
      onClick={() => onClickChip(chipName)}
    />
  );
};

ChipItem.propTypes = {
  chipName: PropTypes.string,
  selected: PropTypes.bool,
  onClickChip: PropTypes.func,
};

export default ChipItem;
