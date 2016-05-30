FROM bobbykostadinov/nginx_node6

ADD . /srv/www
WORKDIR /srv/www

RUN npm cache clean | npm install
RUN npm build

EXPOSE 80

CMD ["/sbin/my_init"]
