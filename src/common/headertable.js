import React from "react"

const HeaderTable = ({ fields, handleSort, sortColumn, handleSearch }) => {

    const setSortClass = (c) => {

        if (c === sortColumn.path && sortColumn.order === 'asc')
            return 'sorted asc'
        else if (c === sortColumn.path && sortColumn.order === 'desc')
            return 'sorted desc'
        else
            return ''


    }
    return (
        <React.Fragment>
            <div className="th-search" >  
        <input placeholder="Search" onChange={(e) => handleSearch(e)} className='search-input' /> 

            </div>
            <div className="tb-header">
            
                    {
                        fields.map((item, index) => {
                            return (<div key={index} className={item.cssClass + ' th-row  '+setSortClass(item.fieldName)} onClick={(item.sortAble) ? () => handleSort(item.fieldName) : undefined}>{item.displayName}  </div>)
                        })}
                
            </div>
        </React.Fragment>

    )

}
export default HeaderTable