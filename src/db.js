import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/wetube');

const db = mongoose.connection;

const handleDbOpen = () => console.log('✅ Connected to DB');
const handleError = (error) => console.log('❌ DB Error : ', error);

db.on('error', handleError);
db.once('open', handleDbOpen);
