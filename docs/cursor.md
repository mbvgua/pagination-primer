# Cursor Pagination

This method navigates through large results in a dataset with the use of a cursor/pointer to keep track of the current position in the results set. Its more modern and provides more efficient and scalable performance, especially when working with large datasets that change on the fly.

It uses a unique identifier(e.g id or timestamp) to mark a position in the last fetched record and fetches subsequent entries from that point onward. The unique identifier is mostly defined with the `WHERE` clause(this acts as a pointer), then one uses `LIMIT` to define how many rows should be returned after the pointer. Using our [dummy database](./../db.sql):

```sql
    SET @user_id = 5;

    SELECT * FROM users WHERE id > @user_id
    LIMIT 10;
```

# Advantages

1. Performance efficiency: there is no need to scan prior records, hence its more efficient for large datasets. Query times will remain consistent even for irregardless of datasize.

1. Data consistency: The cursor will ensure continuity even if the dataset were to change in between datasets. This will help to prevent duplicate or skipped records in fast changing datasets.

1. Scalability: this method excels in applications handling vast data volumes as query times is consistent irregardless.

# Disadvantages

1. Implementation Complexity: it might require way more sophisticated logic to manage cursors, track state and handle unique identifiers. 

1. Dependency on unique indexes: the unique identifier is usually an id, which is unique and easy to filter through. For other identifiers, such as time, custom filtering and sorting demands additional complex logic which greatly increased complexity.

# Use cases

Processing large datasets efficiently, e.g in thousands of rows to be used in batch processing.

# Resources

1. [Offset-Limits vs. Cursor](https://medium.com/enviame-engineering/sql-database-pagination-methods-offset-limit-vs-cursor-based-af066fb621e5)
1. [Pagination in SQL](https://www.geeksforgeeks.org/sql/pagination-in-sql/)
1. [Pagination in Express](https://medium.com/@pirson/implementing-pagination-in-express-js-with-mysql-5ce4693c05f1)
