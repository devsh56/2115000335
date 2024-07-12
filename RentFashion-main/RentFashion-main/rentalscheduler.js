const cron = require('node-cron');
const Register = require('./models/Register');

// Schedule a task to run daily at midnight
cron.schedule('* * * * *', async () => {
  try {
    // Find users with expired rentals
    const usersWithExpiredRentals = await Register.find({
      'rentedItems.rentalEnd': { $lt: new Date() }
    });

    // Update the rentedItems array for each user to remove expired rentals
    for (const user of usersWithExpiredRentals) {
      user.rentedItems = user.rentedItems.filter(
        rental => rental.rentalEnd >= new Date()
      );
      await user.save();
    }

    console.log('Expired rentals removed successfully');
  } catch (err) {
    console.error('Error removing expired rentals:', err);
  }
});
module.exports=cron;