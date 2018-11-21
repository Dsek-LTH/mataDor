FROM node:8

ENV PATH /usr/src/app/front-end/node_modules/.bin:$PATH

WORKDIR /usr/src/app
COPY . .
RUN yarn --production
WORKDIR /usr/src/app/front-end
RUN yarn --production 
# We can't run dev deps with --prod flag
RUN npm install react-scripts -g --silent
RUN yarn build
WORKDIR /usr/src/app

# Bundle app source
EXPOSE 3000
CMD [ "yarn", "start" ]
