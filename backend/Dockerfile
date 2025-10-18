FROM node:24-alpine

EXPOSE 4000

WORKDIR /usr/src/app

# set pnpm variables
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# NOTE: what makes this all work. corepack allows using pnpm,yarn and npm
# from node all without installing them
RUN corepack enable

# copy requiremnts files
COPY package* .
COPY pnpm-lock* .
COPY tsconfig* .

# install needed dependencies
RUN pnpm i -g typescript
RUN pnpm i

# copy the source code
COPY . .

# NOTE: start the prod server not the dev server
# else youll be stuck in a loop
RUN pnpm start:prod:build

CMD ["pnpm","start:prod"]

