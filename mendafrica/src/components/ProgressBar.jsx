const ProgressBar = ({ progress = 70 }) => {
  return (
    <div className="w-full max-w-md">
      <div className="w-full h-1 bg-black overflow-hidden">
        <div 
          className="h-full bg-yellow-400"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

