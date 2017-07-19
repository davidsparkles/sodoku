FROM hypriot/rpi-node:7.4.0
COPY /api/package.json ./api/package.json
RUN cd api && npm install && cd ..
COPY / ./
EXPOSE 10000
CMD npm run start