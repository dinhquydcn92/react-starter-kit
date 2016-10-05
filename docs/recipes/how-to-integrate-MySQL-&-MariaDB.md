## How to integrate MariaDB or MySQL into your project

This tutorial helps you to integrate MariaDB or MySQL into a project through 
several simple steps.

First of all, ensure MariaDB or MySQL was installed in your machine.

In case there is no instance of MariaDB or MySQL was installed. You should 
follow these official documentations to install them:

- MariaDB: [Installation Guide](https://mariadb.com/kb/en/mariadb/getting-installing-and-upgrading-mariadb/)
- MySQL: [Installation Guide](http://dev.mysql.com/doc/refman/5.7/en/installing.html)

### 1. Install `mysql` connector package:

Install through `npm`:

```
$ npm install --save mysql
```

### 2. Create a database and privileges:

You can use any GUI tool to do this steps. Or if you prefer typing like hacker:

```
$ mysql
> CREATE DATABASE database_name;
> CREATE USER 'user_name'@'%' IDENTIFIED BY 'user_password';
> GRANT ALL PRIVILEGES ON database_name.* TO 'user_name'@'%' WITH GRANT OPTION;
> FLUSH PRIVILEGES;
```

### 3. Start your application:

* Development mode:

```
$ PORT=3000 DATABASE_URL=mysql://user_name:user_password@hostname:port/database_name npm start
```

* Production mode:

```
$ PORT=3000 DATABASE_URL=mysql://user_name:user_password@hostname:port/database_name node ./build/server.js
```

or use `pm2`:

```
$ npm install -g pm2
$ PORT=3000 DATABASE_URL=mysql://user_name:user_password@hostname:port/database_name pm2 start ./build/server.js --name react-starter-kit
```
