import {
  makeContractCall,
  broadcastTransaction,
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
  uintCV,
  boolCV,
} from '@stacks/transactions';
import { StacksMainnet, StacksTestnet } from '@stacks/network';

export interface AegisOptions {
  contractAddress: string;
  senderKey: string;
  network?: 'mainnet' | 'testnet';
}

export async function registerAgent(opts: AegisOptions, metadata: string) {
  const network = opts.network === 'mainnet' ? new StacksMainnet() : new StacksTestnet();
  
  const txOptions = {
    contractAddress: opts.contractAddress,
    contractName: 'agent-registry',
    functionName: 'register-agent',
    functionArgs: [stringUtf8CV(metadata)],
    senderKey: opts.senderKey,
    network,
    anchorMode: AnchorMode.Any,
    postConditionMode: PostConditionMode.Allow,
    fee: 400,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}

export async function updateStatus(opts: AegisOptions, agentId: number, active: boolean) {
  const network = opts.network === 'mainnet' ? new StacksMainnet() : new StacksTestnet();

  const txOptions = {
    contractAddress: opts.contractAddress,
    contractName: 'agent-registry',
    functionName: 'toggle-agent-status',
    functionArgs: [uintCV(agentId), boolCV(active)],
    senderKey: opts.senderKey,
    network,
    anchorMode: AnchorMode.Any,
    postConditionMode: PostConditionMode.Allow,
    fee: 400,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}
