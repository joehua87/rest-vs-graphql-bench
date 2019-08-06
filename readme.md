# Bench REST vs GraphQL

## Getting started

### Install dependencies

```sh
yarn
```

### Make sure have mongo database setup

Start an instance of mongodb

```sh
docker run -d --name mongo -p 27017:27017 mongo:4
```

Install autocannon for bench:

```sh
npm install -g autocannon
```

### Setup test data

```sh
`yarn bin`/ts-node src/create-test-data.ts
```

## Bench

Build production: `yarn build`
Start app: `yarn start`

### REST

```sh
autocannon -t 10 -c 400 -d 15s http://localhost:3000/posts
```

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg     | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Req/Sec   | 541     | 541     | 600     | 612     | 594.74  | 15.98   | 541     |
| Bytes/Sec | 61.6 MB | 61.6 MB | 68.4 MB | 69.7 MB | 67.7 MB | 1.82 MB | 61.6 MB |

### GraphQL

```sh
autocannon -t 10 -c 400 -d 15s -m POST -H content-type='application/json' -b '{ "query": "{ posts { title description body tags } }" }' http://localhost:3000/graphql
```

| Stat      | 1%      | 2.5%    | 50%     | 97.5% | Avg     | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- |
| Req/Sec   | 375     | 375     | 482     | 510   | 478.34  | 29.96   | 375     |
| Bytes/Sec | 38.3 MB | 38.3 MB | 49.2 MB | 52 MB | 48.8 MB | 3.06 MB | 38.3 MB |

### Result

> REST is 124% faster than GraphQL (594 req/s vs 478/s)

## TODO

- [ ] Add persisted query with redis cache
- [ ] Add koa tests
- [ ] Add fastify tests
