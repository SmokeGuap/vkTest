import { useState } from 'react';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
} from '@vkontakte/vkui';

import { Filters, Groups } from 'src/components';

const App = () => {
  const platform = usePlatform();
  const [activePanel] = useState('list');

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== 'vkcom' && <PanelHeader delimiter='none' />}
      >
        <SplitCol autoSpaced>
          <View activePanel={activePanel}>
            <Panel id='list'>
              <PanelHeader>Сообщества</PanelHeader>
              <Filters />
              <Groups />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
