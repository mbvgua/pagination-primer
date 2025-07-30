# Pagination

Pagination is an effective means of managing large datasets in an application. One can easily controll the number of rows returned and easily navigate through the result sets easily. It also greatly enhances user experience.

There are two primary means to handles pagination:

- [Limit & Offset](./docs/limit-offset.md)
- [Cursor](./docs/cursor.md)

Which have been discussed sufficiently in the attached documents. After looking at the pros and cons of each method, I decided to use limit and offset.

# Project Setup

We get the project up and running in the following steps:

1. Cloning the project from github.
```bash
    git clone https://github.com/mbvgua/pagination-primer
    cd pagination-primer
```

1. Ensure you have all the dependencies installed, `pnpm` is my package manager of choice, but feel free to utilize other package managers such as `npm`:
```bash
    pnpm i
```

1. Setup the db with the main project data:
```bash
    mysql -uroot -p <db.sql> output.tab
```

1. Finally run the project server:
```bash
    pnpm serve
```

> [!NOTE]
> All these commands have been run as a normal user, i.e `$`, there is no need to use sudo priviledges, i.e `#`
