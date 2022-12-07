### NodeJS streams

- servem para processar dados sob demanda
- JavaScript não foi criado para processar grandes quantidades de dados em memória de uma só vez
- o arquivo é transformado em um buffer. Assim o sistema consegue quebrar o arquivo
  em pequenos pedaços e processar de forma idenpendente.
- esses pedaços são chamados de chunks

### Readable stream:

streams from which data can be read (for example, fs.createReadStream() ). É onde vêm a fonte dos dados. É
uma abstração de uma fonte da qual os dados podem ser consumidos.

- stdin
- fs.createReadStream

### Writeble streams

- fs.createWriteStrea

### Duplex

- TCP socket.

### Transform stream

filtrar. São usadas na etapa de conversão de dados e mapeamento.
É uma stream Duplex que pode ser usado para modificar ou transformar os dados à medida que são gravados e lidos.

- zlib.createGzip

fun fact: request é uma readble stream e response é uma writeable stream

pipe -> um redirecionador ex: ls | grep package | xargs cat | jq .name
usado para consumir dados de streams de maneira mais fácil.

Casos em que isso é utilizado:
-> leitura e escrita de arquivos muito grandes
-> geração de relatórios
-> extração e compressão de arquivos
-> processamento de áudio

- As nodeJs streams herdam a classe eventos do NODEJS!!Ou seja são instancias do EventEmitter
