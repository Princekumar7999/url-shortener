import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    const [fullUrl, setFullUrl] = React.useState<string>("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await axios.post(`${serverUrl}/shorturl`,{fullUrl: fullUrl});
        
            setFullUrl("");
        }catch(error){
           console.log(error);
        }
    }
  return <div className='container mx-auto p-2'>
    <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-bright">  
        <h2 className="text-white text-4xl text-center pb-4">URL SHORTENER</h2>
        <p className="text-white text-4xl text-center pb-2 font-extralight">paste your untidy link to shorten it</p>
        <p className="text-white text-xl text-center font-thin">free tool to shorten a URL or reduce link,Use our URL shortener</p>
        <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
  <div className="relative w-full max-w-md p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500">
    <input 
      type="text" 
      placeholder="Add your link" 
      required 
      value={fullUrl}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
      className="block w-full p-4 pl-12 text-sm text-black bg-white border-none rounded-lg focus:outline-none"
    />
    
    <button 
      type="submit" 
      className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      Shorten URL
    </button>

    {/* Placeholder or label for shortened URL display */}
    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 pointer-events-none">
      
    </span>
  </div>
</div>

        </form>
        </div>
    </div>
  </div>
};

export default FormContainer;
