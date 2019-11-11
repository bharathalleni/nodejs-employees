FROM node:10
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm clean-install
EXPOSE 3000
CMD [ "node", "index.js" ]
