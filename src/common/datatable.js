
import HeaderTable from "./headertable";
import sortData from '../common/sort';
import Pagination from '../common/pagination';
import paginate from'../common/paginate'
import React from "react";

const DataTable =  ({ data, fields,buttons,sortColumn,setSortColumn,searchQuery,setSearchQuery ,currentPage,pageSize,setCurrentPage}) => {

    const handleSort = (c) => {
        setSortColumn({ path: c, order: (sortColumn.order === 'asc') ? 'desc' : 'asc' })    
      }
      const handleSearch = (e) => {           
        setSearchQuery(e.target.value)
        setCurrentPage(0)
    
      }
    data=sortData(data,sortColumn,searchQuery,fields)
        const addField=(item)=>
        {
        let content=[];
            { fields.forEach(obj => {          
                content.push(<div className={obj.cssClass +'  row'} key={item.id+obj.fieldName}>{item[obj.fieldName]} </div>)           
            })}
                 
            return content
        }
        const addButtons=(item)=>
        {
             let content=[];
            { buttons.forEach(obj => {
                content.push(<div className={obj.cssClass + " btnHolder"}   key={item.id+obj.btnName}  onClick={()=>obj.btnFunction(item)} >{obj.text}{(obj.img)? <img  src={obj.img}/>:obj.btnName} </div>)           
            })}
                 
            return content
        }


    return (
        <>
     
            <HeaderTable fields={fields} handleSort={handleSort} handleSearch={handleSearch} sortColumn={sortColumn}  />             
            {
               paginate(data,currentPage,pageSize).map((item) => {
                    return (
                       <div className="tb-row" key={item.id}>                 
                        {addField(item)}                      
                        {addButtons(item)}    

                        </div>              
                        )
                })}
          
      
        <Pagination  
            itemsCount={data.length}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
           
           />
        </>

    )

}
export default DataTable