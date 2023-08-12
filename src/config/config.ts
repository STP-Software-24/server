import dotenv from 'dotenv';
dotenv.config();
import { prod } from './prod';


// switch (process.env.NODE_ENV) {
//     case 'production':
//         break;
//     case 'development':
//         break;
//     default:
// }

const config = prod

export default config;
