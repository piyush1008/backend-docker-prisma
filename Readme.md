#Create a network 
- docker network create prismanetwork

#Postgres 
docker run -p 5432:5432 -d --rm -e POSTGRES_PASSWORD=mysecretpassword --network prismanetwork --name postgres  postgres  

#To build the backend
-docker build -t userapp .
- docker run -d  -p 3001:3001 -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network prismanetwork userapp

-