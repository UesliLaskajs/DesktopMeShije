import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const ProductById = () => {
    const [product, setProduct] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/doctors/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) => {
                console.log("Error getting specific Product Data", err)
            })
    }, [id])

    return (<>
    {/* Po Punoj akoma me ket */}
    </>

    )

}

export default ProductById