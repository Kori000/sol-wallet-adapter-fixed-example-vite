import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import React, { PropsWithChildren, useMemo } from 'react'

const SolanaProvider = ({ children }: PropsWithChildren) => {
  const network = WalletAdapterNetwork.Devnet

  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [
      // new PhantomWalletAdapter(),
      // new CoinbaseWalletAdapter(),
      // new TorusWalletAdapter(),
      new SolflareWalletAdapter({ network })
    ],
    [network]
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        localStorageKey='bitrealms-wallet'
        wallets={wallets}
      >
        {children}
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default SolanaProvider
