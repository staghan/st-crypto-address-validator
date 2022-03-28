import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import init from './init';

dotenvExpand.expand(dotenv.config());

init();
