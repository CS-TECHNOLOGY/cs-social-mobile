/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  LogBox,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

LogBox.ignoreLogs(['Warning: ...']);

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* {hasJoined ? ( */}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {/* ):
         <JoinScreen joinChat={joinChat} />
       }
        */}
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

