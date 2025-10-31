resource "aws_instance" "this" {
  ami                    = var.ami
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  key_name               = var.key_name
  associate_public_ip_address = true

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras enable corretto17 -y
              yum install java-17-amazon-corretto -y
              amazon-linux-extras enable postgresql13 -y
              yum install postgresql13 -y
              EOF

  tags = { Name = var.name }
}
