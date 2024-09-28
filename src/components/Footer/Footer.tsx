import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return(
    <div className="bg-slate-900 text-white text-base text-centre">
        Copyright &1#169; URLShortener | Prince Kumar    </div>
  );
};

export default Footer;
