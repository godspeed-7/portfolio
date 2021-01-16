import { useState } from 'react'

function useForm(form) {
    const [values, setValues] = useState(form);

const handleChange = (e) => {
    setValues(values => ({...values,[e.target.name]: e.target.value}));
}
    return [values, handleChange]
}

export default useForm
