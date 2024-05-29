todo: remove all packages (up until openssl-devel)

ece-openlab-admin@192.17.223.13 is the remote

ssh ece-openlab-admin@192.17.223.13 from powershell to ssh into remote desktop

password: fishrfun!

apache2 server:

to start it do sudo systemctl restart apache2

service shibd restart

refer to shibboleth docs for more info

Mysql password for BOTH root and ece-openlab-admin@localhost: password
to access mysql as root: mysql -u root -p (the password is 'password')
to access mysql as ece-openlab-admin: mysql -u ece-openlab-admin -p (the password is 'password')
