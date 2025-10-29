resource "aws_instance" "backend" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 (ejemplo)
  instance_type = var.instance_type

  tags = {
    Name = "backend-instance"
  }
}
