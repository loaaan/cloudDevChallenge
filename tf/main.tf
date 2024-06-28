terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "> 3.0"
    }
  }
}

providers "aws" {
    region = ""
    access_key = ""
    secret_key = ""
}

resource "aws_instance" "main" 