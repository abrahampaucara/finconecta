module "ec2" {
  source        = "../../modules/ec2"
  instance_type = var.instance_type
}

module "rds" {
  source   = "../../modules/rds"
  db_name  = var.db_name
}
