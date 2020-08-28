# Comandos do docker

Comandos mais utilizados no docker como ajuda

## Executar o Dockerfile

```
$ docker build -t name_container/name_docker .
```

## Executar o docker

```
$ docker run -p 8080:8080 --name name_docker -d name_container/name_docker
```

## Listar os dockers em execução

```
$ docker ps -a
```
