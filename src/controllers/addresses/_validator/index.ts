import Web3 from 'web3';
import { AppEnvironment } from '../../../core';

const getBalance = async (web3: Web3, address: string) => {
  const valid = Web3.utils.isAddress(address);
  const retValue: any = {
    address,
    valid,
  };

  if (valid) {
    retValue.balance = await web3.eth.getBalance(address);
  }

  return retValue;
};

const validator = async (req: any, res: any) => {
  const web3 = new Web3(
    Web3.givenProvider ||
      new Web3.providers.HttpProvider(
        `https://ropsten.infura.io/v3/${AppEnvironment.INFURA_PROJECT_ID}`,
      ),
  );

  const _status = 200;

  let _addresses: string[] = [];

  const { params, body } = req;

  if (params.address) {
    const { address } = params;

    _addresses = [address];
  } else if (body.addresses) {
    const { addresses } = body;

    _addresses = addresses;
  } else {
    return res.status(400).json({ error: 'Bad request.' });
  }

  const result = await Promise.all([
    ..._addresses.map((address) => getBalance(web3, address)),
  ]);

  return res.status(_status).json(result);
};

export default validator;
