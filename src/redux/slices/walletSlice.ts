import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EthereumProvider from "@walletconnect/ethereum-provider";

interface WalletState {
  account: string | null;
  balance: string | null;
  provider: EthereumProvider | null;
  loading: boolean;
  transactionHash: string | null;
}

const initialState: WalletState = {
  account: null,
  balance: null,
  provider: null,
  loading: false,
  transactionHash: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string | null>) => {
      state.account = action.payload;
    },

    setBalance: (state, action: PayloadAction<string | null>) => {
      state.balance = action.payload;
    },
    setProvider: (state, action: PayloadAction<EthereumProvider | null>) => {
      state.provider = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTransactionHash: (state, action: PayloadAction<string | null>) => {
      state.transactionHash = action.payload;
    },
  },
});

export const {
  setAccount,
  setBalance,
  setProvider,
  setLoading,
  setTransactionHash,
} = walletSlice.actions;

export default walletSlice.reducer;
