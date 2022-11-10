FROM node:12.6
EXPOSE 9000
COPY server.js .
CMD node server.js
