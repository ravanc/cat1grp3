import React from 'react';
import { View, Text } from 'react-native';

import ProgressItem from './ProgressItem';

const ProgressCard = ({ storeName, products }) => {

  return (
    <View className='self-center border-[.5px] border-[#AAAAAA] w-[90vw] rounded-xl overflow-hidden'>
      <View className='bg-[#E4FFE6] p-2 pl-4'>
        <Text className='text-lg font-plight'>{ storeName }</Text>
      </View>
      {
        products.map((item, index) => 
          <ProgressItem item={item} key={item.productId} listSize={products.length} index={index} />
      )}
    </View>
  );
};

export default ProgressCard;