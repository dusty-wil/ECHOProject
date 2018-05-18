FROM node:8

ENV PATH=/ECHOProject/node_modules/.bin:$PATH

RUN apt-get update && apt-get install -y \
    curl \
    git \
    make

# Handle AWS stuff later...

WORKDIR /ECHOProject

# Install dependencies:

COPY package.json .
RUN npm install

COPY . .
 RUN npm run build
