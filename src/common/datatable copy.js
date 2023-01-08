
import HeaderTable from "./headertable";
import sortData from '../common/sort';
import Pagination from '../common/pagination';
import paginate from'../common/paginate'



const DataTable = ({ data, fields,handleAlert,openModal,openHistory,sortColumn,handleSort,handleSearch,searchQuery ,currentPage,pageSize,setCurrentPage}) => {

    data=sortData(data,sortColumn,searchQuery,currentPage,pageSize)
    return (
        <div>

        <table>
            <HeaderTable fields={fields} handleSort={handleSort} handleSearch={handleSearch} sortColumn={sortColumn}  />
            <tbody>     
            {
               paginate(data,currentPage,pageSize).map((item) => {
                    return (
                        <tr key={item.id}>
                            
                        <td>{item.name}</td>
                        <td>{item.family}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.dob}</td>
                        <td>{item.address}</td>
                        <td className="btnHolder"><img   onClick={()=>openHistory(item)} alt="History" src='/images/history.svg'/></td> 
                        <td className="btnHolder" onClick={()=>openModal(item)}><img alt="edit" src='/images/edit.svg'/></td> 
                        <td className="btnHolder" onClick={()=>handleAlert(item.id)}><img alt="Delete" src='/images/delete.svg'/></td> 
                        </tr>
                        )
                })}
                </tbody>
        </table>
        <Pagination  
            itemsCount={data.length}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
           
           />
        </div>

    )

}
export default DataTable