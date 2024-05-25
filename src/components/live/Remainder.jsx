import  { useState, useEffect } from 'react';
import ReminderAudio from './../../assets/reminder.mp3'

const Reminder = () => {
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const reminderInterval = setInterval(() => {
      setShowReminder(true);
      playSound();
      setTimeout(() => {
        setShowReminder(false);
      }, 5000); // Display reminder for 2 seconds
    },  4*60*1000); // Trigger reminder every 4 hours

    return () => {
      clearInterval(reminderInterval);
    };
  }, []);

  const playSound = () => {
    const audio = new Audio(ReminderAudio);
    audio.play();
  };

  return (
    <div className={`fixed inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ${showReminder ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src='https://res.cloudinary.com/dw58xmffd/image/upload/v1716587023/Eyt-4VtWYAgf2oG_i9dbig.jpg'/>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
