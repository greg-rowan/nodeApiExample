# wait for SQL Server to come up
sleep 20s
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Alaska2017 -d master -i SqlCmdScript.sql
