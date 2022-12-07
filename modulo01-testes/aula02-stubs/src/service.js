const https = require('https');
class Service {
  // Eu gosto sempre de ter async na assinatura de funções que retornam promises
  // porque dessa forma eu consigo visualizar que o método que chamei é uma promise
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        response.on('data', (data) => resolve(JSON.parse(data)));
        response.on('error', reject);
      });
    });
  }
  async getPlanets(url) {
    const result = await this.makeRequest(url);
    return {
      name: result.name,
      surfaceWater: result.surface_water,
      appearedIn: result.films.length,
    };
  }
}

// (async () => {
//   const response = await new Service().makeRequest(
//     'https://swapi.dev/api/planets/1',
//   );
//   console.log('response', response);
// })();

module.exports = Service;
