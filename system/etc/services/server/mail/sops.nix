let 
  file = ../../../../../secrets/etc/mail.yaml;
in 
{
  sops.secrets = {
    mail_db_passwd = {
      sopsFile = file;
    };
    mail_sasl_passwd = {
      sopsFile = file;
    };
  };
}