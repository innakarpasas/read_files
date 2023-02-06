import fs from 'fs'
const data =  fs.readFile('data.json',(err,data)=>{
    if(err)throw err;
    const jsonData=JSON.parse(data);
    jsonData.forEach((app)=>{
        console.log(app.name+' app has '+app.users.length+ ' users')
    })
});
