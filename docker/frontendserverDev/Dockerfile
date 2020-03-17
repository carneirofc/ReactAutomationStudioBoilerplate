FROM node:12.16.1

ADD ./ReactApp/package.json /frontendserverAppDev/package.json
ADD ./ReactApp/jsconfig.json /frontendserverAppDev/jsconfig.json
WORKDIR /frontendserverAppDev
ENV PATH /frontendserverAppDev/node_modules/.bin:$PATH
RUN npm set registry http://registry.npmjs.org/
RUN npm install

RUN mkdir -p /frontendserverAppDev/src/React-Automation-Studio
WORKDIR /frontendserverAppDev/
CMD npm start

EXPOSE 3001 3000
