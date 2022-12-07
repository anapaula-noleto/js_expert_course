const Service = require('./service');
const sion = require('sinon');
const { deepStrictEqual } = require('assert');
const BASE_URL_1 = 'https://swapi.dev/api/planets/1';
const BASE_URL_2 = 'https://swapi.dev/api/planets/2';
const mocks = {
  tatooine: require('./mocks/tatoine.json'),
  alderaan: require('./mocks/alderaan.json'),
};
(async () => {
  // {
  //   // do jeito abaixo o teste depende de um serviço externo que pode cair
  //   // se o serviço externo cai, o teste não passa. Não é o jeito certo de se fazer.
  //   const service = new Service();
  //   const withoutSub = await service.makeRequest(BASE_URL_2);
  //   console.log(JSON.stringify(withoutSub));
  // }
  const service = new Service();
  // fazendo um stub da função make request
  const stub = sion.stub(service, service.makeRequest.name);

  // toda vez que chamar a função com os argumentos (withArgs)
  stub.withArgs(BASE_URL_1).resolves(mocks.tatooine);
  stub.withArgs(BASE_URL_2).resolves(mocks.alderaan);
  {
    const expected = {
      name: 'Tatooine',
      surfaceWater: '1',
      appearedIn: 5,
    };

    const results = await service.getPlanets(BASE_URL_1);
    deepStrictEqual(results, expected);
  }
  {
    const expected = {
      name: 'Alderaan',
      surfaceWater: '40',
      appearedIn: 2,
    };
    const results = await service.getPlanets(BASE_URL_2);
    deepStrictEqual(results, expected);
  }
})();
