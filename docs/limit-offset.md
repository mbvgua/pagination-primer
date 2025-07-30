# Limit & Offset Pagination

This basically involves the use of `LIMIT` and `OFFSET` clauses in the sql queries. It works by limiting the number of rows returned.

The `LIMIT` clause restricts the number of rows returned is a result set, whereas the `OFFSET` clause specificies the starting point within the result set.

Prograatically, this would be:

```sql
    SELECT * FROM users
    LIMIT number_of_rows OFFSET offset_value;
```

For example, using our [dummy database](../db.sql), we could say:

```sql
    SELECT * FROM users LIMIT 10 OFFSET 10;
```


# Advantages

1. Easy implementation: Its quite intuitive and straight forward, requiring minimal setup.

# Disadvantages

1. Performance deterioration: on increasingly larger databases, the offset increases and the database must scan and discard all preceding all records to reach the starting point. This makes queries to progressively become slower for deeper pages, and it also becomes quite cost intensive.

1. Data inconsistency: If the data changes between requests, most likely due to insertions or deletions, paginations results will become inconsistent as it might duplicate some results and entirely skips others.


# Use cases

Randomn page access, mostly for user facing interfaces. Though slow it is more practica and less complex

# Resources

1. [Offset-Limits vs. Cursor](https://medium.com/enviame-engineering/sql-database-pagination-methods-offset-limit-vs-cursor-based-af066fb621e5)
1. [Pagination in SQL](https://www.geeksforgeeks.org/sql/pagination-in-sql/)
1. [Pagination in Express](https://medium.com/@pirson/implementing-pagination-in-express-js-with-mysql-5ce4693c05f1)
