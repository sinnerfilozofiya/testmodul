import { Button, Text } from 'react-native'
import { useWalletConnect } from '@walletconnect/react-native-dapp'
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { useEffect } from 'react'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

export default function Account() {
  const connector = useWalletConnect()

  const { connect } = useConnect({
    connector: new WalletConnectConnector({
      options: {
        qrcode: false,
        connector,
      },
    }),
  })
  const { disconnect } = useDisconnect()

  const { data: account } = useAccount()
  const { data: balance } = useBalance({ addressOrName: account?.address, token: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE' })

  useEffect(() => {
    if (connector && connector.accounts?.length && !account) {
      connect()
    }
  }, [connector])

  if (account) {
    return (
      <>
        <Button title="Disconnect" onPress={() => {  disconnect()}} />
        <Text>Account address: {account?.address}</Text>
        <Text>Balance: {balance?.formatted} {balance?.symbol}</Text>
      </>
    )
  }
else {
  return <Button title="Connect" onPress={() => connector?.connect()} />
}
}
