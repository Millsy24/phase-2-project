import React from "react";
import {useState} from 'react';

function FooterAdd(){
   
    const {link, setLink} = useState(false)

    (link? window.location = 'https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly9sb2dpbi55YWhvby5jb20v&guce_referrer_sig=AQAAAGgT9sVX42Q4hQtMUMoo_WHIRATklTkyLMf54hb1MehmjIlET9quR56hv1J0BHInuKJ-TAoEvKJ5DjXF5t30HOPcGEZuUa8MhFBPzqM0oe_QHj31J5bbng_fMAjeohfnk-v2xxznamoI9wWCxNjEoGI9ESq9bqfzmzgYNfISazGu':'')

   return(
      <img 
        id = 'annoyance' 
        src = 'https://www.webdesignmuseum.org/uploaded/exhibitions/web-banners-in-the-90s/yahoo-pager-1998.gif'
        onClick = {''}
      />
   )
}

export default FooterAdd;