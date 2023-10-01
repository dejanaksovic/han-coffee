import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useRequestOTP = () => {
   const [loading, setLoading] = useState(false)
   const { URL } = useArticleContext()
   const { user } = useAuthContext()
   const { makeAlert } = useGlobalNotificationContext()

   const requestOTP = async (num, flag, code) => {
      //Stripping 0
      if(num?.startsWith('0'))
         num = num.slice(1)
      console.log(`Broj: ${num}`)
      console.log(`Kod ${code}`)
      try {
         const res = await axios.post(`${URL}/auth/twilio?${flag}=1`, {num, code}, {
            headers: {
               Authorization: `Bearer ${user.token} ${user.refreshToken}`
            }
         })
         console.log(res)
         if(res.status === "OK")
            return true
      }
      catch(err) {
         console.log(err);
         if(err.response) {
            makeAlert('error', `Porudžbina nije poslata, greška: ${err.response.err}`)
        }
        else {
            makeAlert('error', 'Greška pri komunikaciji sa serverom, proverite Vašu internet konekciju ili se obratite administratoru')
        }
      }
   }

   return { loading, requestOTP }
}