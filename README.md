# nodeApiExample
Working example of dockerized Node Express CRUD API which connects to MSSQL. 

## Purpose
To create nodeJs based REST API which can connect to SQL Server and return data. 

## Developer Environment
On Mac, clone repo and run following docker command
```
docker-compose up -d
```
This will start 2 docker containers
1. Linux SQL Server database with a sample database named Products. 
2. NodeJs Express API which has standard controllers/routes. 

## Screensots
### Database
![screenshot](/images/db_screenshot.png)

### API
![screenshot](/images/api_screenshot.png)
