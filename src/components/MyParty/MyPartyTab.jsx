import { useEffect, useState } from 'react';
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
        <Box sx={{ p: 3 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PartyTab = ({ parties }) => {
  const [value, setValue] = useState(0);

  const [onGoing, setOnGoing] = useState([]);
  const [waiting, setWaiting] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const newOnGoing = [];
    const newWaiting = [];
    const newClosed = [];
    const nowDate = new Date();

    parties.map(party => {
      const formatStartDate = new Date(party.startDate);
      const formatEndDate = new Date(party.endDate);

      if (nowDate < formatStartDate) {
        newWaiting.push(party);
      } else if (nowDate > formatEndDate) {
        newClosed.push(party);
      } else {
        newOnGoing.push(party);
      }

      setOnGoing(newOnGoing);
      setWaiting(newWaiting);
      setClosed(newClosed);

      return false;
    });
  }, [parties]);

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
          aria-label="basic tabs example"
        >
          <Tab label="진행중" {...a11yProps(0)} />
          <Tab label="대기중" {...a11yProps(1)} />
          <Tab label="종료" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {<MyPartyList myParties={onGoing} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {<MyPartyList myParties={waiting} />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {<MyPartyList myParties={closed} />}
      </TabPanel>
    </Box>
  );
};

PartyTab.propTypes = {
  parties: PropTypes.array,
};

export default PartyTab;
