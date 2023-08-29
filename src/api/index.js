import axios from 'axios'

export const sendEmail = async (values) => {
    const res = await axios.post(`https://pu2f1a50yi.execute-api.ap-southeast-1.amazonaws.com/prod/contactus`, values)
    return res
}