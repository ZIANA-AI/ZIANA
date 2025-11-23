const WelcomeScreen = () => {
  return (
    <article className="leading-none flex flex-col items-center lg:gap-12 gap-4">
       <img 
        src="/ZIANA-AI.jpg"       
        alt="Ziana Quiz Logo" 
        className="w-20 h-20 lg:w-32 lg:h-32 mb-4 lg:mb-6" // jarak logo ke teks
      />

      <h1 className="md:text-[4rem] text-[2.5rem] font-light text-dark-navy dark:text-white lg:w-[29rem] text-center">
        Welcome to the <span className="font-medium">Ziana Quiz!</span>
      </h1>

      <p className="md:text-xl italic text-grey-navy dark:text-light-bluish text-center">
        Pick a subject to get started.
      </p>
    </article>
  );
};

export default WelcomeScreen;
