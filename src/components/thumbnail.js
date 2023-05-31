import './Viewer.css';

function Thumbs({ items, currentIndex, setActiveIndex}){
    return (
            <span className='first' >
                {items.map((catalog, idx) =>(
                     <span  
                     id={idx} 
                     key={idx} 
                     data-testid={'thumb-button-' + idx}
                     onClick={() => {setActiveIndex(idx)}}
                 >
                     <span 
                         className={'thumb ' + 
                             (idx === currentIndex ? 'thumb-selected' : '')} 
                     >
                         <img 
                             className='thumbnail-image' 
                             src={catalog.src}
                             id={idx} />
                     </span>
                 </span>
                    )
                  )}
            </span>
    )
            
    
}

export default Thumbs;