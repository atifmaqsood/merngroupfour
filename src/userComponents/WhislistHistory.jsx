import React from 'react'

function WhislistHistory() {
  return (
    <div>
       <>
   
    
   <Container fluid className='px-3'>

      <Row>
       <Col  md={2} className="bg-light px-4 py-4">
         <UserSidebar/>
       </Col>
       <Col md={10}>
         
   <h1 className='my-3 text-center'>My Wishlist</h1>
        

   <Table striped bordered hover>
     <thead>
       <tr>
         <th>Image</th>
         <th>Name</th>
         <th>Price</th>
         <th>Action</th>
         </tr>
      
       
     </thead>
       <tbody>
         <tr>
           <td>
             <img style={{ height: "50px", width: "50px" }} src={myImage} />
           </td>
           <td>Pizza</td>
           <td>Rs900</td>
          
           <td>
             <p>
               <Button variant="danger" className="mx-2">
                 <FontAwesomeIcon icon={faTrashCan} />
               </Button>
               <Button>
                 <FontAwesomeIcon icon={faPenToSquare} />
               </Button>
             </p>
           </td>
         </tr>
         <tr>
           <td>
             <img style={{ height: "50px", width: "50px" }} src={myImage} />
           </td>
           <td>Pizza</td>
           <td>Rs900</td>
          
           <td>
             <p>
               <Button variant="danger" className="mx-2">
                 <FontAwesomeIcon icon={faTrashCan} />
               </Button>
               <Button>
                 <FontAwesomeIcon icon={faPenToSquare} />
               </Button>
             </p>
           </td>
         </tr>
         <tr>
           <td>
             <img style={{ height: "50px", width: "50px" }} src={myImage} />
           </td>
           <td>Pizza</td>
           <td>Rs900</td>
           
           <td>
             <p>
               <Button variant="danger" className="mx-2">
                 <FontAwesomeIcon icon={faTrashCan} />
               </Button>
               <Button>
                 <FontAwesomeIcon icon={faPenToSquare} />
               </Button>
             </p>
           </td>
         </tr>
       </tbody>
     </Table>

       </Col>
      </Row>

   </Container>
   </>
    </div>
  )
}

export default WhislistHistory