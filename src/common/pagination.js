const Pagination = ({ currentPage,pageSize,itemsCount,setCurrentPage}) => {

    const pageLinks = () => {
        let content = [];
 
        for (let i = 1; i <= Math.ceil(itemsCount / pageSize); i++) {
        
          content.push(<button key={i+'link'} className={currentPage===i-1?'active':''} onClick={()=>setCurrentPage(i-1)} >{i}</button>);
        }
        return content;
      };

    return (
        <div className="pagination">{pageLinks()}
           
        </div>

    )

}
export default Pagination



