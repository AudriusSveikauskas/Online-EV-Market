import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@/components/basics/Container';
import MakeSettings from '@/components/admin/MakeSettings';
import ModelSettings from '@/components/admin/ModelSettings';
import EquipmentSettings from '@/components/admin/EquipmentSettings';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const AdminSettings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            aria-label="setting tabs"
          >
            <Tab label="Make" id="tab-0" />
            <Tab label="Model" id="tab-1" />
            <Tab label="First registration" id="tab-2" />
            <Tab label="Price" id="tab-3" />
            <Tab label="Mileage" id="tab-4" />
            <Tab label="Optional Equipment" id="tab-5" />
            <Tab label="Exterior Colour" id="tab-6" />
            <Tab label="Interior Colour" id="tab-7" />
            <Tab label="Interior material" id="tab-8" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MakeSettings />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ModelSettings />
        </TabPanel>
        <TabPanel value={value} index={2}>
          First registration
        </TabPanel>
        <TabPanel value={value} index={3}>
          Price
        </TabPanel>
        <TabPanel value={value} index={4}>
          Mileage
        </TabPanel>
        <TabPanel value={value} index={5}>
          <EquipmentSettings />
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
};

export default AdminSettings;
