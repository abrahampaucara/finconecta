resource "aws_db_instance" "postgres" {
  identifier           = "assessment-db"
  engine               = "postgres"
  instance_class       = "db.t3.micro"
  allocated_storage    = 20
  db_name              = var.db_name
  username             = "postgres"
  password             = "postgres123"
  skip_final_snapshot  = true
}
