import app from './app.js'
import { connectBD } from './db.js';


connectBD();
app.listen(3000);
console.log('server corriendo en puerto',3000);