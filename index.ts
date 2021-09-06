import { Key, magicBytes } from 'sotez';
import {config} from "dotenv"

config();

const setupKey = async () => {
  const key = new Key({
    key: process.env.TZ_PRIV_KEY
    });
  await key.ready;

  const publicKey = key.publicKey();
  const publicKeyHash = key.publicKeyHash();
  
  console.log(`Pub Key - ${publicKey}`);
  console.log(`Pub Key Hash - ${publicKeyHash}`);

};

setupKey();