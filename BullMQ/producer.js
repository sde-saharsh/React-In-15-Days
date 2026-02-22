const {Queue}  = require("bullmq");

const notificationQueue = new Queue('email-queue');

async function init(){
    const res = await notificationQueue.add('email to saharsh',{ 
        email:'saharsh@gmail.com',
        subject:'Hello World',
        body:' this is a testing'
    })

    console.log("Job added to queue",res.id)
}

init();