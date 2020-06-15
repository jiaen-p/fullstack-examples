# Querying performance

## Reason

Depending on the size of your objects inside the a collection, querying through all the collection may impact its performance. Hence the need for a better solution.

## How Index works in mongo

An index in MongoDB is a special data structure that holds the data of few fields of documents on which the index is created.

The purpose of having an index in the first place is to reduce the amount of time needed to find the requested object by reducing the amount of data it scans making it much smaller than the objects itself. It can also be loaded into system memory, and hence, lowering even more the amount of time it needs to access the data without reading it from the drive and then checking if it matches with the one it was requested.

## Solution

There are a two ways you can optimize a query depending on what kind of results you expect.

- Single key index.
- Compound indexes.

---

### Single key index

It is used mainly for querying with only one of the fields of your object `db.collection.createIndex({key: 1 or -1})`. For ascending order use 1 and descending order -1

### Compound indexes

It works similarly to single key index, it is possible to add multiple querying fields to the index, however if there are too many fields in the index, it will defeat the purpose of having an index at all `db.collection.createIndex({keyA: 1 or -1, keyB: 1 or -1})`

---

#### source

- [mongodb docs](https://docs.mongodb.com/manual/tutorial/create-indexes-to-support-queries/)
- [example and tutorial](https://beginnersbook.com/2017/09/mongodb-indexing-tutorial-with-example/#:~:text=An%20index%20in%20MongoDB%20is,that%20holds%20only%20few%20fields.)
