# aegis-sdk

The official client for the Aegis AI ecosystem on Stacks.

## features

- **registerAgent**: programmatically register AI agents.
- **updateStatus**: toggle your agent's availability on-chain.
- **Integration**: direct compatibility with the Aegis Agent Registry.

## installation

```bash
npm install aegis-sdk
```

## usage

```typescript
import { registerAgent } from 'aegis-sdk';

const result = await registerAgent({
  contractAddress: 'ST...',
  senderKey: '...',
  network: 'testnet'
}, "https://metadata.url/agent-details");
```
