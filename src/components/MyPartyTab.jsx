import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
          <Typography>{children}</Typography>
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

const PartyTab = () => {
  const [value, setValue] = React.useState(0);

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
        {<MyPartyList myParties={parties} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        대기중
      </TabPanel>
      <TabPanel value={value} index={2}>
        종료
      </TabPanel>
    </Box>
  );
};

export default PartyTab;

const parties = [
  {
    partyId: 1,
    ottId: 1,
    ottName: '넷플릭스',
    startDate: '2021-11-18',
    endDate: '2022-1-18',
    isLeader: true,
    monthlyReimbursement: 10000,
  },
  {
    partyId: 2,
    ottId: 2,
    ottName: '왓챠',
    startDate: '2021-11-18',
    endDate: '2022-1-18',
    isLeader: false,
    monthlyReimbursement: 10000,
  },
  {
    partyId: 3,
    ottId: 3,
    ottName: '웨이브',
    startDate: '2021-11-18',
    endDate: '2022-1-18',
    isLeader: true,
    monthlyReimbursement: 10000,
  },
];
