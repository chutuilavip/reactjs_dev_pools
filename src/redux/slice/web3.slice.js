import { createSlice } from '@reduxjs/toolkit';
import Web3 from 'web3';

const initialState = {
  isLoading: true,
  account: 'empty',
  balance: 0,
};

export const getAccountWeb3 = async () => {
  if (window.ethereum) {
    const account = window.ethereum.selectedAddress;
    if (account) return account;
    else {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    }
  } else {
    if (window.confirm('Install metamask extension')) {
      window.open(
        ' https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
        '_blank'
      );
    }
    // alert(
    //   'Install metamask extension !\nLink: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
    // );
  }
};

export const getBalance = async () => {
  try {
    const web3 = new Web3(window.ethereum);
    const account = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(account[0]);
    return balance;
  } catch (err) {
    console.log(err);
  }
};

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    getAccountMetaMask: (state, action) => {
      state.account = action.payload;
    },
  },
});

export const { getAccountMetaMask } = web3Slice.actions;

export default web3Slice.reducer;
