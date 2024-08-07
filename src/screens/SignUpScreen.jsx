import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: '#9370db'}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 rounded-tr-2xl p-2 rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/signup.png')}
            style={{width: 200, height: 150}}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            value="John Snow"
            placeholder="Enter Name"
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            value="john@gmail.com"
            placeholder="Enter Email"
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            secureTextEntry
            value="test12345"
            placeholder="Enter Password"
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
          />
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="font-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold py-5 text-center">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 justify-center bg-gray-100 rounded-2xl">
            <Image
              source={require('../assets/google.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 justify-center bg-gray-100 rounded-2xl">
            <Image
              source={require('../assets/apple.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 justify-center bg-gray-100 rounded-2xl">
            <Image
              source={require('../assets/facebook.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-semibold text-yellow-500 ml-5">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
