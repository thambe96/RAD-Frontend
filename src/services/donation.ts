import api from "./api"


export const createPaymentIntent = async (amount: number) => {
    const res = await api.post("donation/createPaymentIntent", { amount })
    return res.data.clientSecret
}

export const retrievepbkey = async () => {
    const res = await api.get('donation/getpbkey')
    return res.data.publishableKey
}