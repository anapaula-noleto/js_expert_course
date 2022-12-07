// a emtrada deve ser uma readable stream e saída uma writable stream
// readable stream | writable stream

//! estrutura comum usando pipe
// readableSrc
//   .pipe(transformStream1)
//   .pipe(transformStream2)
//   .pipe(finalWrtitableDest)

//! exemplo usando pipe
// readable.pipe(writable);

//! exemplo usando eventos
// readable.on('data', (chunk) => {
//   writable.write(chunk);
// });

// readable.on('end', () => {
//   writable.end();
// });

// process.stdin
//   .pipe(process.stdout)
//   .on('data', (msg) => console.log('data', msg))
//   .on('error', (msg) => console.log('error', msg))
//   .on('end', (_) => console.log('end')) // appears at the end of the stream
//   .on('close', (_) => console.log('close'));

// instancia do servidor - a conexao esta sendo direcionada para a saida do terminal
// node -e "require('net').createServer((socket) => socket.pipe(process.stdout)).listen(1338)"

// conexao tcp - client - terminal 1
// node -e "process.stdin.pipe(require('net').connect(1338))"

// node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file

// criar uma api para devolver os dados do big file

import http from 'http';
import { readFileSync } from 'fs';

// criar um servidor http

http
  .createServer((req, res) => {
    const file = readFileSync('big.file');
    res.write(file);
    res.end();
  })
  .listen(3004, () => console.log('server running at 3004'));

// curl localhost:3004 -o output.txt
