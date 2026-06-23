{
  virtualisation.oci-containers.containers.redchan-api = {
    image = "localhost/redchan-portfolio-api:latest";
    pull = "never";
    ports = [ "4174:4174" ];
    volumes = [
      "redchan_db:/data/db"
      "redchan_uploads:/data/uploads"
    ];
    environment = {
      NODE_ENV = "production";
      HOST = "0.0.0.0";
      PORT = "4174";
      DATABASE_URL = "/data/db/redchan.sqlite";
      STORAGE_ROOT = "/data/uploads";
      MAX_UPLOAD_BYTES = "1073741824";
      WEB_ORIGIN = "https://redvr.sivak.work";
      SESSION_COOKIE_NAME = "redchan_session";
      CSRF_COOKIE_NAME = "redchan_csrf";
      ADMIN_EMAIL = "red@sivak.work";
    };
  };

  virtualisation.oci-containers.containers.redchan-web = {
    image = "localhost/redchan-portfolio-web:latest";
    pull = "never";
    dependsOn = [ "redchan-api" ];
    ports = [ "8080:8080" ];
    environment = {
      API_PROXY_PASS = "http://redchan-api:4174";
    };
  };
}