export const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database:'music-land',
    // ssl: false,  // Uncomment this line if you're using a self-signed SSL certificate
    username: 'postgres',
    password: '1234',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  },
};
