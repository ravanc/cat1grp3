import React from 'react';
import { View, Text } from 'react-native';

import HistoryItem from './HistoryItem';

const HistoryCard = ({ storeName, products }) => {

  return (
    <View className='self-center border-[.5px] border-[#AAAAAA] w-[90vw] rounded-xl overflow-hidden'>
      <View className='bg-[#E4FFE6] p-2 pl-4'>
        <Text className='text-lg font-plight'>{ storeName }</Text>
      </View>
      {
        products.map((item, index) => 
          <HistoryItem item={item} key={item.productId} listSize={products.length} index={index} />
      )}
    </View>
  );
};

export default HistoryCard;