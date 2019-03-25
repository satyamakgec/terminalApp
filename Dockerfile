FROM node:8.11.4

WORKDIR /app/website

EXPOSE 3000 35729 5000
COPY ./docs /app/docs
COPY ./website /app/website
COPY ./api /app/api
COPY entrypoint.sh /root/entrypoint.sh
RUN chmod +x /root/entrypoint.sh

ENTRYPOINT [ "/root/entrypoint.sh" ]