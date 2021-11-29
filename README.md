# Endpoint para trabajar con bases de datos Postgres

## Comandos para inicializar en heroku
`git remote -v`
Para agregar conexion en HEROKU:
'heroku git:remote -a [nombre app heroku]'

revisamos el nuevo respositorio destino:
'git remote -v'

Para crear la instancia en heroku
heroku addons:create heroku-postgresql:hobby-dev

## Revisar info de la base de datos elegida:
'heroku pg:info'
