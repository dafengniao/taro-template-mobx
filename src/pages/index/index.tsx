import { Text, View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { Observer, useLocalObservable } from 'mobx-react-lite';
import { FC, useState } from 'react';
import '@/app.scss';
import './index.scss';
import index from './store';

const Index: FC = () => {
  const indexStore = useLocalObservable(() => index);
  const [vlaues, setValues] = useState<string>('123123');
  useDidShow(() => {
    setValues('1111111');
    console.log('componentDidShow-----');
  });

  return (
    <Observer>
      {() => (
        <View className="index" onClick={indexStore.setCount}>
          <Text>
            Hello world!{vlaues}-----
            {indexStore.count}
          </Text>
        </View>
      )}
    </Observer>
  );
};

export default Index;
