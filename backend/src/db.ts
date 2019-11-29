import dotenv from 'dotenv';
import mysql, { Pool, PoolOptions } from 'mysql2/promise';

dotenv.config();

class Db {
  /*
    for '!' sign view
    https://github.com/Microsoft/TypeScript-Vue-Starter/issues/36#issuecomment-371434263
  */
  private pool!: Pool;

  private config: PoolOptions = {
    database: 'device_inventory',
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASS,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
  };

  public async connect(): Promise<Pool> {
    this.pool = mysql.createPool(this.config);

    return this.pool;
  }
}

export default Db;
