import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: '#9370db'}}>
      <View className="flex-1 flex justify-around my-4">
        <Text>Let's Get Started!</Text>
      </View>
    </SafeAreaView>
  );
}
