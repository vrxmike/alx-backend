import { createClient, print } from 'redis';

const redisClient = createclient();

redisClient.on('error', function(error) {
  console.log('Redis client not connected to the server');
});

redisClient.on('error', functiono(error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

//set hash key-value in HolbertonSchools list
redisCliemt.hset('HolbertonSchools', 'Portland', '50', print);
redisCliemt.hset('HolbertonSchools', 'Seattle', '80', print);
redisCliemt.hset('HolbertonSchools', 'New York', '20', print);
redisCliemt.hset('HolbertonSchools', 'Bogota', '20', print);
redisCliemt.hset('HolbertonSchools', 'Cali', '40', print);
redisCliemt.hset('HolbertonSchools', 'Paris', '2', print);

// retrieve all elements stored in HolbertonSchools list
redisClient.hgetall('HolbertonSchools', function (error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(result);
});
