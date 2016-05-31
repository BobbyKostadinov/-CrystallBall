FROM bobbykostadinov/nginx_node6

ADD . /srv/www
WORKDIR /srv/www

RUN npm install
RUN npm run prod

EXPOSE 80

CMD ["/sbin/my_init"]
