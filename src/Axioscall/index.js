import React, {memo, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

export const Axioscall = axios.create({
  baseURL: 'https://irctc1.p.rapidapi.com/api/',
  timeout: 50000,
  timeoutErrorMessage: 'Please Try Again or Check Your Network!',
});

Axioscall.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
Axioscall.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
