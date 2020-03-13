FROM node:13.2.0

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]

# docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app