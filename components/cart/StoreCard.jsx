import React from 'react';
import { View, Text } from 'react-native';

import StoreItem from './StoreItem';

const StoreCard = ({ storeName, products, total, setTotal }) => {

  return (
    <View className='self-center border-[.5px] border-[#AAAAAA] w-[90vw] rounded-xl overflow-hidden'>
      <View className='bg-[#E4FFE6] p-2 pl-4'>
        <Text className='text-lg font-plight'>{ storeName }</Text>
      </View>
      {
        products.map((item, index) => 
          <StoreItem item={item} key={item.productId} total={total} setTotal={setTotal} listSize={products.length} index={index} />
      )}
    </View>
  );
};

export default StoreCard;