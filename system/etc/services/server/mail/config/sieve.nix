{
  environment.etc."/srv/mail/dovecot/sieve/default.sieve" = {
    text = ''
      require ["fileinto"];

      if header :contains "X-Spam" "Yes" {
        fileinto "Junk";
        stop;
      }

      if anyof (
        exists "List-Unsubscribe",
        exists "List-Id",
        header :contains "Precedence" "bulk",
        header :contains "Precedence" "list"
      ) {
        fileinto "Newsletters";
        stop;
      }

      if anyof (
        header :contains "From" "noreply",
        header :contains "From" "no-reply",
        header :contains "From" "donotreply",
        header :contains "Auto-Submitted" "auto-generated"
      ) {
        fileinto "Notifications";
        stop;
      }
    '';
  };
}