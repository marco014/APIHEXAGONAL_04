// src/infrastructure/server.ts
import dotenv from 'dotenv';
dotenv.config();

import app from '../interfaces/http/expressApp';

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
    console.log(`Server encendido en el puerto ${PORT}`);
    console.log(`Usando ${process.env.USE_MONGODB === 'true' ? 'MongoDB' : 'MySQL'} database`);
});