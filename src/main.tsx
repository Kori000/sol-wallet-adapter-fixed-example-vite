import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SolanaProvider from './solana-provider.tsx'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SolanaProvider>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </SolanaProvider>
  </React.StrictMode>
)
