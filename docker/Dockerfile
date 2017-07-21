FROM hypriot/rpi-node:7.4.0
COPY /api/package.json ./api/package.json
RUN cd api && npm install
COPY / ./
EXPOSE 10000
CMD cd api && npm run start
