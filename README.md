# nodeApiExample
Working example of dockerized Node Express CRUD API which connects to MSSQL. 

## Instructions
On Mac, clone repo and run following docker command
```
docker-compose up -d
```

This will start 2 docker containers
1. SQL Server database with sample database named Products. 
2. NodeJs Express API which has standard controllers/routes. 

![screenshot](/images/db_screenshot.png)
