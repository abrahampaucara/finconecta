terraform {
  backend "s3" {
    bucket = "terraform-states"
    key    = "dev/terraform.tfstate"
    region = "us-east-1"
  }
}
