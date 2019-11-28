import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

class Db {
  private config = {
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
  };
}
