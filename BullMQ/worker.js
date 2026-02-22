const { Worker } = require('bullmq');

const sendEmail = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
};

const worker = new Worker(
  'email-queue',
  async (job) => {
    console.log('msg received with id', job.id);
    console.log('processing....');
    console.log('sending email to', job.data.email);

    await sendEmail();

    console.log('email sent');
  },
  {
    connection: {
      host: '127.0.0.1',
      port: 6379,
    },
  }
);