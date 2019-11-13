import React from 'react'
export default ()=>{
return(
<>
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required/>
  <input type="submit" value="Submit"/>
</form>
</>
);

}