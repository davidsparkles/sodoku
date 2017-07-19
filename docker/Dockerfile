FROM hypriot/rpi-node:7.4.0
RUN npm install -g @angular/cli
COPY /ui/package.json ./ui/package.json
RUN cd ui && yarn install && cd ..
COPY / ./
RUN cd ui && yarn build:aot && cd ..
COPY /api/package.json ./api/package.json
RUN cd api && yarn install && cd ..
EXPOSE 10000
CMD npm run start