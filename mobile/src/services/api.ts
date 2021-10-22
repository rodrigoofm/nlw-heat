import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://169.254.253.70:4000'
});