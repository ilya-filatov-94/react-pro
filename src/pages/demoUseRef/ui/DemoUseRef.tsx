import { type FC, useState, type SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CustomTabPanel, a11yProps } from 'shared/ui/customTabPanel';
import { ClickTimer } from 'features/refExamples/clickTimer';
import { PreviousInput } from 'features/refExamples/previousInput';
import { FocusTracker } from 'features/refExamples/focusTracker';
import { DebouncedLogger } from 'features/refExamples/debouncedLogger';
import { WebSocketLogger } from 'features/refExamples/webSocketLogger';
import styles from './DemoUseRef.module.css';

const DemoUseRef: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.WrapperPage}>
      <h1>Демонстрационные примеры с useREf</h1>
      <div className={styles.WrapperTabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="demo-useRef-Tabs"
        >
          <Tab
            label="ClickTimer"
            {...a11yProps(0)}
          />
          <Tab
            label="PreviousInput"
            {...a11yProps(1)}
          />
          <Tab
            label="FocusTracker"
            {...a11yProps(2)}
          />
          <Tab
            label="DebouncedLogger"
            {...a11yProps(3)}
          />
          <Tab
            label="WebSocketLogger"
            {...a11yProps(4)}
          />
        </Tabs>
      </div>
      <CustomTabPanel
        value={value}
        index={0}
      >
        <ClickTimer />
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
      >
        <PreviousInput />
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
      >
        <FocusTracker />
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={3}
      >
        <DebouncedLogger />
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={4}
      >
        <WebSocketLogger />
      </CustomTabPanel>
    </div>
  );
};

export default DemoUseRef;
