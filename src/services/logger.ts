import fs from 'fs';
import { join } from 'path';
export const accessLogStream = fs.createWriteStream(join(process.cwd(), 'access.log'), {
    flags: 'a',
});
