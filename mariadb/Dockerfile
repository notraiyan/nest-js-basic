FROM mariadb
RUN sed -i 's/port\s*=\s*3306/port = 3308/' /etc/mysql/mariadb.cnf
RUN sed -i 's/port\s*=\s*3306/port = 3308/' /etc/mysql/my.cnf
CMD ["mysqld"]
EXPOSE 3308
