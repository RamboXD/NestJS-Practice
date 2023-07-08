const pgtools = require('pgtools');

const config = {
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  port: 5432, // or your custom port
};

pgtools.dropdb(config, 'test-nest', function (err) {
  if (err) {
    console.error('Error dropping database:', err);
    process.exit(-1);
  }
  console.log('Database dropped successfully.');

  pgtools.createdb(config, 'test-nest', function (err) {
    if (err) {
      console.error('Error creating database:', err);
      process.exit(-1);
    }
    console.log('Database created successfully.');
    process.exit(0);
  });
});
