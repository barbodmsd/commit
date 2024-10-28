export const smsHandler = async (mobileNumber, message) => {
    try{
        const res = await fetch("https://api.limosms.com/api/sendpeertopeersms", {
            method: "POST",
            headers: {
              ApiKey: process.env.SMS_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Message: [message],
              SenderNumber: "10000000002027",
              MobileNumber: [mobileNumber]
            }),
          });
          const data=await res.json()
          return data
    }catch(err){
        return err
    }
 
  
};
