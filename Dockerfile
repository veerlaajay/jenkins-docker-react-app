FROM httpd:latest
RUN rm -rf /var/www/html/index.html
COPY . /var/www/html
EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]
