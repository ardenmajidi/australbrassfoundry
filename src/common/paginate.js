

export default function paginate(data,currentPage,pageSize) {
  
  return data.slice(pageSize*currentPage,(pageSize*currentPage)+pageSize)
}
