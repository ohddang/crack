const Footer = () => {
  return (
    <div className="flex flex-col w-full h-32 bg-black/80 text-white p-5">
      <span className="flex-grow text-xs">{}</span>
      <span className="flex flex-grow text-xs items-end">
        {
          "Information provided on this site is based on data from the NEXON Open API. All rights reserved."
        }
      </span>
    </div>
  );
};

export default Footer;
