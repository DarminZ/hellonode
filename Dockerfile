FROM node:12.6
EXPOSE 80
COPY server.js .
CMD node server.js
