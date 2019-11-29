import dotenv from 'dotenv';
import mysql, { PoolOptions } from 'mysql2/promise';

dotenv.config();

class Db {
  private config: PoolOptions = {
    database: 'device_inventory',
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASS,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
  };

  public async connect() {
    const pool = mysql.createPool(this.config);

    return pool;
  }
}

export default Db;
