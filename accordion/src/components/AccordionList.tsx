import { useState } from 'react'

const AccordionList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
    const items = [{
        header:"Item 1",
        id:1,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },{
        
            header:"Item 2",
            id:2,
            description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        
    },{
        header:"Item 3",
        id:3,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        header:"Item 4",
        id:4,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
]

const handleAccordion = (id:number)=>{
  setSelectedId(prevId => (prevId === id ? null : id));
}
  return (
    <div>
      {items.map((item)=>{
        return (
            <div key={item.id} style={{height:selectedId === item.id?"80px":"50px",border:"1px solid black",padding:"1rem"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <p>{item.header}</p> 
              <button style={{width:"4rem",height:'2rem'}} onClick={()=>{
                handleAccordion(item.id)

              }}>{selectedId === item.id ? "up":"down"}</button>
              </div>

              {selectedId === item.id && item.description}
        

            </div>
        )
      })}
    </div>
  )
}

export default AccordionList
