variable "aws_region" {
  description = "Región AWS donde se desplegarán los recursos"
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "Perfil AWS configurado en tus credenciales locales (~/.aws/credentials)"
  default     = "default"
}

variable "instance_type" {
  description = "Tipo de instancia EC2 para el backend"
  default     = "t3.micro"
}

variable "db_name" {
  description = "Nombre de la base de datos en RDS"
  default     = "appdb"
}
