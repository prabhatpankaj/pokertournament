### STAGE 1: Build ###
# This stage is used to build the production application
# The production build is made into /usr/src/app/build
FROM node:12.2.0-alpine AS build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g 
COPY . /usr/src/app
RUN npm run build

### STAGE 2: Production Environment ###
# This stage is used to run the application
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
