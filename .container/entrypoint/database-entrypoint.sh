#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;

# 啟動 PostgreSQL 並創建資料庫
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $POSTGRES_USER;
EOSQL

# 連接到新建的資料庫
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$APP_DB_NAME" <<-EOSQL
  BEGIN;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION postgis;
  COMMIT;
EOSQL

# SELECT * FROM yoxirider WHERE "riderId" = '1'
#50 70
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$APP_DB_NAME" < /home/yoxiorder.sql
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$APP_DB_NAME" < /home/yoxirider.sql
