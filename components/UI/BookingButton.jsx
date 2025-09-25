'use client';

export default function BookingButton({ 
  calendlyUrl, 
  buttonText = "Book Now",
  className = "bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
}) {
  
  const handleClick = () => {
    console.log("✅ Button clicked! URL:", calendlyUrl);
    // Simple test - open in new tab
    window.open(calendlyUrl, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {buttonText}
    </button>
  );
}