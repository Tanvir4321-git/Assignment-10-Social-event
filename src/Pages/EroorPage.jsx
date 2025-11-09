import React from 'react';

const EroorPage = () => {
    return (
        <div>
              <div className='min-h-screen flex items-center justify-center'>
          <title> Error</title>
           <div className='bg-black w-[600px] h-[300px] mx-auto flex flex-col items-center justify-center rounded-2xl'>
             <h1 className='text-4xl font-bold text-red-600 '>Error 404</h1>
             <h3 className='text-2xl font-semibold text-center text-white mt-5' >Page   not  found</h3>
           </div>
        </div>
        </div>
    );
};

export default EroorPage;