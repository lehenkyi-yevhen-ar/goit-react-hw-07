import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"

const SearchBox = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) =>
          dispatch(changeFilter(e.target.value))
        }
      />
    </div>
  )
}

export default SearchBox
