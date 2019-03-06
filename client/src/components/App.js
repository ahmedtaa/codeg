import React, { Component } from 'react';
class App extends Component {
    
    render() { 
        return ( 
            <div>
            

<div class="ui secondary pointing menu">
<a class="logo item">
 startup
</a>
<a class="active item">
 <i class="flaticon-home"></i> Home
</a>
<a class="item">
 <i class="flaticon-mail"></i> Messages
</a>
<a class="item">
 <i class="flaticon-heart"></i> Friends
</a>
<div class="right menu">
 <div class="item">
   <div class="ui icon input">
     <input placeholder="Search..." type="text">
     <i class="flaticon-position link icon"></i>
   </div>
 </div>
 <a class="ui item">
   Logout
 </a>
</div>
</div>
            </div>
         );
    }
}
 
export default App;