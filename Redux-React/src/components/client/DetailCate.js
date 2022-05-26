import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../../features/CategorySlice'

const DetailCate = () => {
    const categories = useSelector(data => data.category.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

  return (
    <div>
        {categories.map((item, index) => {
            return <div key={index}>
                <Link to={item.slug}>{item.name}</Link>
            </div>
        })}
    </div>
  )
}

export default DetailCate