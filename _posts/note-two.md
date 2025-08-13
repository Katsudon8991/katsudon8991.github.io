---
title: Memo 2
tag:
    - Memo
---

## 도커 입문 23강 - Docker Compose Spring & MySQL

* [codingspecialist/docker-study](https://github.com/codingspecialist/docker-study)
* 준비물 : .sql파일, Spring 프로젝트

1. MySQL DB를 위한 Dockerfile

```dockerfile
FROM mysql:8.0

COPY init.sql /docker-entrypoint-initdb.d

ENV MYSQL_ROOT_PASSWORD=root1234
ENV MYSQL_DATABASE=metadb
ENV MYSQL_HOST=%

CMD ["--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]
```

2. Spring Server를 위한 Dockerfile 준비

```dockerfile
FROM openjdk:11-jdk-slim

WORKDIR /app

# COPY만 docker-compose 파일의 위치를 기반으로 작동함
COPY . .

# 개행문자 오류 해결 [unix와 window 시스템 차이]
RUN sed -i 's/\r$//' gradlew

# RUN은 현재 파일을 위치를 기반으로 작동함
RUN chmod +x ./gradlew
RUN ./gradlew clean build

ENV JAR_PATH=/app/build/libs
RUN mv ${JAR_PATH}/*.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
```

3. 각각 .sql 파일이 들어 있는 폴더, 프로젝트 폴더에 넣기
4. docker-compose.yaml 작성

```yaml
version: '3'
services:
  db:
    build: 
      context: ./docker-test-db
      dockerfile: Dockerfile
    ports:
      - 3306:3306
    volumes:
      - ./docker-test-db/store:/var/lib/mysql
    networks:
      - network
  server:
    build: 
      context: ./docker-test-server
      dockerfile: Dockerfile
    restart: always
    ports:
      - 8080:8080
    depends_on:
      - db
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/metadb?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false&allowPublicKeyRetrieval=true
      SPRING_DATASOURCE_DRIVER: com.mysql.cj.jdbc.Driver
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: root1234
    networks:
      - network

networks:
  network:
```

5. docker-compose up -d 터미널에 입력 후 `localhost:8080`, `localhost:8080/user` 접속해서 잘 실행되는 지 확인

## 도커 입문 24강 - Docker Compose React & Spring & MySQL

## 도커 입문 30강 - Docker Compose로 빌드와 nginx 실행 한번에 하기

```dockerfile
FROM node:alpine as build
# node.js 이미지를 build라는 이름으로 dockerhub에서 가져온다.
WORKDIR /app
COPY package.json /app
# # app 폴더에 React 프로젝트 package 복사
RUN npm install --silent
# npm 설치하고
COPY . /app
# 리액트 프로젝트 전체 복사
RUN npm run build
# 컨테이너 내부에서 리액트 빌드

FROM nginx
COPY --from=build  /app/build /usr/share/nginx/html
# build 이미지의 /app/build 내부의 파일을 nginx html 폴더로 복사 
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

## 도커 입문 32강 - Docker Compose React와 SpringDB포함 Nginx로 연결하는 개념 잡기