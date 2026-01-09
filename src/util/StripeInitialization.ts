import { loadStripe } from "@stripe/stripe-js"
// import { retrievepbkey } from "../services/donation"


// export const initStripe = async () => {
//     const pbkey = await retrievepbkey()
//     return await loadStripe(pbkey)
// }

export const stripePromise = loadStripe("pk_test_51S6y0y2M5zdyQQeDBmKjQuH1vX9LATqMdkaCQpUgfE1l29PifU6ckECT5Dk90qzSzgIgyeoV41RQIhNfcc8GUGW000vkjM46y4")