function ThemeEditor({theme,setTheme}){

return(

<div>

<h3>Theme</h3>

<input
type="color"
value={theme.backgroundColor}
onChange={(e)=>setTheme({...theme,backgroundColor:e.target.value})}
/>

<input
type="color"
value={theme.buttonColor}
onChange={(e)=>setTheme({...theme,buttonColor:e.target.value})}
/>

<select
onChange={(e)=>setTheme({...theme,fontFamily:e.target.value})}
>

<option>Arial</option>
<option>Roboto</option>
<option>Inter</option>

</select>

</div>

)

}

export default ThemeEditor;