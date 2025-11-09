import React from 'react';
import { Authcontext } from './Authcontext';


const Authprovider = ({children}) => {




    const Authinfo={

    }

    return <Authcontext value={Authinfo}>{children}</Authcontext>
        
};

export default Authprovider;