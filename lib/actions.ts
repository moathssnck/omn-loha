

export const playNotificationSound = () => {
    const audio=new Audio('/notification-alert-9-331720.mp3')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };
