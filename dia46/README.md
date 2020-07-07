# day 46

## Angular forms control

- formGroups
- ngSubmit

Fullstack project using angular for the client, Node as the database Gateway.

To run the project

- Inside each folder, run ```npm install```
- Inside client ```ng serve --open```
- Inside API ```node index.js```

The API assumes that mysql is running and there's a database called ```Angular```, with a table called ```discos``` with the following fields:

- ```id``` int and it has autoincrement and is the primary key
- ```titulo``` and ```interprete``` varchar(100)
- ```anyoPublicacion``` int(4)
