const bcrypt = require('bcrypt');

const password = "rohan@123";

async function hashing(){
    //  salt generate nhi kiya hai toh wo khud se salt add krdega
    // aur agar salt ko generate kiya hai toh round me no. ki place pr salt ko likh denge

    // hashcode+salt

    // console.time("hash");
    const salt = await bcrypt.genSalt(10);

    const hashpass = await bcrypt.hash(password,salt);
    // Same password ke liye different hashcode generate hoga due to salt different
    // $2b$10$gT28WV.phjquWkN8ZlxRLOKHaraJjIvHDghidg8Tb0pSHHug95kvy
    // $2b$10$GZuvkqZvBql2xmIMfM0e/OXoKVrFshX8eH5.cgWr9YAro1zAWJLLO
    
    // console.timeEnd("hash");

    console.log(salt);
    console.log(hashpass);

    // Salt -     $2b$10$e928.2T6hMr7Le8lXu5Cku
    // Hashcode - $2b$10$e928.2T6hMr7Le8lXu5CkuAQkb7SPf/2/F2yW6iCOpoLJZKnqqjka

    const ans = await bcrypt.compare(password,hashpass);
    console.log(ans);
}


hashing();