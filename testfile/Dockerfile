FROM node:18-alpine

# root work
RUN adduser -S appuser
WORKDIR /app
COPY . .
RUN chown -R appuser /app

# drop privileges
USER appuser

CMD ["node", "server.js"]