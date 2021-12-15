import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import MyPartyList from './MyPartyList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `party-status-tab-${index}`,
    'aria-controls': `party-status-tabpanel-${index}`,
  };
}

const PartyTab = ({
  onGoingParties,
  recruitingParties,
  finishedParties,
  onGoingButtonState,
  recruitingButtonState,
  finishedButtonState,
  onClickParty,
  onClickMoreButton,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="party-status-tab"
        >
          <Tab label="진행중" {...a11yProps(0)} />
          <Tab label="대기중" {...a11yProps(1)} />
          <Tab label="종료" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyPartyList
          status={'onGoing'}
          parties={onGoingParties}
          buttonDisabled={onGoingButtonState}
          onClickParty={onClickParty}
          onClickMoreButton={onClickMoreButton}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyPartyList
          status={'recruiting'}
          parties={recruitingParties}
          buttonDisabled={recruitingButtonState}
          onClickParty={onClickParty}
          onClickMoreButton={onClickMoreButton}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyPartyList
          status={'finished'}
          parties={finishedParties}
          buttonDisabled={finishedButtonState}
          onClickParty={onClickParty}
          onClickMoreButton={onClickMoreButton}
        />
      </TabPanel>
    </Box>
  );
};

PartyTab.propTypes = {
  onGoingParties: PropTypes.array,
  recruitingParties: PropTypes.array,
  finishedParties: PropTypes.array,
  onGoingButtonState: PropTypes.bool,
  recruitingButtonState: PropTypes.bool,
  finishedButtonState: PropTypes.bool,
  onClickParty: PropTypes.func,
  onClickMoreButton: PropTypes.func,
};

export default PartyTab;
