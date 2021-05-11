FROM node:12.6
ARG ARG_TEST=.
ENV ENV_TEST=${ARG_TEST}
EXPOSE 80
COPY server.js ${ENV_TEST}
CMD node ${ENV_TEST}/server.js
