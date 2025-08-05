# Backend

The backend has primarily been built with [`Node Js`](https://nodejs.org/en) and the [`Express`](https://expressjs.com/) framework. The main language used is [`Typescript`](https://www.typescriptlang.org/).

To get started, ensure that you have `node` and `typescript` installed on your device. Also a node package manager of choice is required, e.g `yarn`,`pnpm` or `npm`. I have used `pnpm`.

## Setup

1. To get started, you need to navigate to this backend repo and install all the necessary dependencies:

```bash
cd backend/
pnpm install
```

1. Next, you need to create a `.env` file and fill it with the appropriate values. Use the dummy values in [.env-example](./.env-example) as a reference:

```bash
touch .env
```

1. Next start the backend serve:

```bash
pnpm start
```
