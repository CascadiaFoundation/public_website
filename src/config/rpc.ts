import { ChainId } from './chainIds';

const RPC = {
  [ChainId.ETHEREUM]:
    'https://mainnet.infura.io/v3/b596546b8ae94aa883f9830c1fw90767f',
  [ChainId.RINKEBY]:
    'https://eth-rinkeby.alchemyapi.io/v2/XVLwDlhGP6ApBXFz_lfv0aZ6VmurWhYD',
  [ChainId.SOPHON]: 'http://44.211.12.215:8545',
};

export default RPC;
