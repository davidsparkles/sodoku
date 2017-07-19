FROM hypriot/rpi-node:7.4.0
RUN npm install -g @angular/cli
COPY /ui/package.json ./ui/package.json
RUN cd ui && npm install && cd ..
COPY / ./
RUN cd ui && npm run build:aot && cd ..
COPY /api/package.json ./api/package.json
RUN cd api && npm install && cd ..
EXPOSE 10000
CMD npm run start