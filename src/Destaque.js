import React from 'react';
const Destaque = (props) => {
return(
<div>
<p>Autor: {props.autor}</p>
<p>Artigo: {props.artigo}</p>
</div>
)
}
export default Destaque;