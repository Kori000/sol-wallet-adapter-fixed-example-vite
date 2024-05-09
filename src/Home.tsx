import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

const Home = () => {
  const { publicKey, disconnect, wallet } = useWallet()

  const handleExit = () => {
    disconnect()
  }
  return (
    <div>
      <h1>{wallet?.adapter.name}</h1>

      {publicKey && (
        <>
          <button onClick={handleExit}>Exit</button>
          <p>pubkey: {publicKey?.toString()}</p>
        </>
      )}

      <div>
        <WalletMultiButton />
      </div>
    </div>
  )
}

export default Home
