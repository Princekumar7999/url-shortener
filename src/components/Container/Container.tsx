import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/urlData';
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../DataTable/DataTable'; 

interface IContainerProps {
    
}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const [data,setData] = React.useState<UrlData[]>([]);
    const fetchTableData = async () => {
        const response = await fetch(`${serverUrl}/shorturl`);
        console.log("response from server is:",response);
        const result = await response.json();
        setData(result.data);
    };

    React.useEffect(() => {
        fetchTableData();
    },[]);

  return( 
  <>
  <FormContainer />
  <DataTable data={data} />
    </>
  );
   

  
};

export default Container;
