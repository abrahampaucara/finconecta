module "vpc" {
  source        = "../../modules/vpc"
  cidr_block    = "10.0.0.0/16"
  vpc_name      = "dev-vpc"
  public_subnet = "10.0.1.0/24"
}

module "ec2" {
  source        = "../../modules/ec2"
  ami           = "ami-0c94855ba95c71c99" # Amazon Linux 2 AMI en us-east-1
  instance_type = "t3.micro"
  subnet_id     = module.vpc.subnet_id
  key_name      = "my-ec2-key"
  name          = "dev-linux-server"
}
