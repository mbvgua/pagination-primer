FROM node:24-alpine

EXPOSE 4200

WORKDIR /usr/src/app

# install the project dependencies
RUN npm install -g typescript
RUN npm install -g @angular/cli

# copy the required packages list
COPY package* .
COPY tsconfig* .

# install required packages
RUN npm install

# copt the entire project source code
COPY . .

# serve th app, allowing acces outside of the container
CMD ["ng","serve","--host","0.0.0.0"]

