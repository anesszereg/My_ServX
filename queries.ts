interface data{
    name: string;
    num:string;
    email:string;
    subject:string;
    message:string;
    page:string;
}

export const addReply = async(obj:data)=>{
    const result = await fetch("/api/addContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return result
  }