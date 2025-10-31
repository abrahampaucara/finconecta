# ASSESSMENT
Proyecto FullStack + AWS Terraform

## Bases de Datos
### Postgres
docker run -d --name assessment-postgres \
  -e POSTGRES_DB=assessmentdb \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=yourpassword \
  -p 5432:5432 \
  postgres:15

### MongoDB
docker run -d --name assessment-mongo \
  -p 27017:27017 \
  -v mongo-data:/data/db \
  mongo:6

