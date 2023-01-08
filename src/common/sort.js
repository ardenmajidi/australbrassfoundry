

export default function sortData(data, sortColumn, searchQuery,fields) {


  if (sortColumn.order === 'asc') {
    data = data.sort((a, b) => {
      if (a[sortColumn.path].toLowerCase() < b[sortColumn.path].toLowerCase()) {
        return -1;
      }
    });
  }
  else if (sortColumn.order === 'desc') {
    data = data.sort((a, b) => {
      if (a[sortColumn.path].toLowerCase() > b[sortColumn.path].toLowerCase()) {
        return -1;
      }
    });
  }
  const serachFields=(r)=>
  {
    let search=false
    fields.forEach(c=>{
      if(c.sortAble)      
         if(r[c.fieldName].toLowerCase().includes(searchQuery.toLowerCase()))
         search=true

    })
    return search
  }
  const filerData = () => {    
    data= data.filter( r => serachFields(r))   

  }
  filerData()

  return data
}
