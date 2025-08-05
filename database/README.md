# Database

The project is built with a relational database management system, [`MySql`](https://www.mysql.com/). You need to have it installed on your system to work with the project, prefarrably the cli version, though other GUI versions of mysql will still work the same.

## Setup

1. Navigate to this directory and create the database:

```bash
cd database
mysql -uroot -p <db.sql> output.tab
```

> [!NOTE]
>
> You will be prompted for your mysql password, if correct the database will be created accordingly and the `output.tab` file created.
