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
  onGoingState,
  recruitingState,
  finishedState,
  onClickParty,
  onClickMoreButton,
  value,
  onSetStep,
}) => {
  const { parties: onGoingParties, buttonDisabled: onGoingButtonDisabled } =
    onGoingState;
  const {
    parties: recruitingParties,
    buttonDisabled: recruitingButtonDisabled,
  } = recruitingState;
  const { parties: finishedParties, buttonDisabled: finishedButtonDisabled } =
    finishedState;

  const handleChange = (event, newValue) => {
    onSetStep(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          pt: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="party-status-tab"
          centered
        >
          <Tab label="진행중" {...a11yProps(0)} />
          <Tab label="대기중" {...a11yProps(1)} />
          <Tab label="종료" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyPartyList
          status={'ONGOING'}
          parties={onGoingParties}
          buttonDisabled={onGoingButtonDisabled}
          onClickParty={onClickParty}
          onClickMoreButton={onClickMoreButton}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyPartyList
          status={'RECRUITING'}
          parties={recruitingParties}
          buttonDisabled={recruitingButtonDisabled}
          onClickParty={onClickParty}
          onClickMoreButton={onClickMoreButton}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyPartyList
          status={'FINISHED'}
          parties={finishedParties}
          buttonDisabled={finishedButtonDisabled}
          onClickParty={onClickParty}
          onClickMoreButton={onClickMoreButton}
        />
      </TabPanel>
    </Box>
  );
};

PartyTab.propTypes = {
  value: PropTypes.number,
  onGoingState: PropTypes.object,
  recruitingState: PropTypes.object,
  finishedState: PropTypes.object,
  onClickParty: PropTypes.func,
  onClickMoreButton: PropTypes.func,
  onSetStep: PropTypes.func,
};

export default PartyTab;
