import knex from 'knex';

export const connection = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'shopper',
    database : 'shopper',
    password: '123456natany'
  }
});