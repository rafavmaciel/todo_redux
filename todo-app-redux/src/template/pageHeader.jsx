import React from'react' 

export default props => {
    return(
    <div className ='mb-2 p-3'>
    <header className = 'page-header page-header'>
        <h2>{props.name}<small>{props.small}</small></h2>
    </header>
    </div>
    
    )
    
    
}