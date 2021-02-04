FROM docker-mirror.sh.synyi.com/node:latest AS build

WORKDIR /app

COPY . .

RUN npm config set registry https://npm-mirror.sh.synyi.com/ && \
    npm install && \
    npm run build

FROM docker.sh.synyi.com/bff:latest AS final

COPY --from=build /app/dist/dsp /usr/www/dsp
COPY --from=build /app/misc/nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
COPY --from=build /app/misc/app.conf /etc/nginx/conf.d/app.conf

ENV GIT_URL http://git.sy
ENV API_SERVER http://infrastructure-devops-gitlab-extensions-gitlab-injector-server.sy
ENV FRONT_SSO_SERVER http://account-center.sy

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
