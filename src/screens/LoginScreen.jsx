import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowLoeftIcon} from 'react-native-heroicons/solid';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: '#9370db'}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity className="bg-yellow-400 rounded-tr-2xl p-2 rounded">
            <ArrowLoeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
