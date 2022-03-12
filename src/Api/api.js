import React, {useState} from 'react';
import axios from 'axios';
import {credentials} from '../screens/Login/LoginScreen';

const apiUrl =
  'https://kasppe.com.ng/farmsolhub/wp-json/niishcloud_api/v1/login/';

export const userDetails = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios
    .post(apiUrl, credentials)
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
};
