import { NextRequest, NextResponse } from "next/server";
import ldap from 'ldapjs';
import { cors } from "@/utils/cors";

type ResponseData = {
    message?: string;
    error?: string;
};

export const POST = async (req: NextRequest): Promise<NextResponse> =>{
    // cors(req, res, ()=>{

    // });

    // if (req.method !== 'POST') {
    //     res.setHeader('Allow', ['POST']);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    //     return;
    //   };

    const {username, password} = await req.json();
    console.log(username, password);
    console.log(req.method);

    if(!username || !password){
        return new NextResponse(JSON.stringify({error:"Username and password are required"}));
    };

    const client = ldap.createClient({
        url: "ldap://10.4.104.19:636",
        // url: "ldap://epn-dc-01.ecobank.group:636",
        connectTimeout: 20000,
        reconnect: true,
        // epn-dc-01.ecobank.group
    });

    const dn = `cn=${username},ou=eng,dc=ecobankgroup`;

    try {
        await new Promise((resolve, reject) => {
            client.bind(dn, password, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve(dn);
              }
            });
          });
      
          client.unbind();
          return new NextResponse(JSON.stringify({ message: "Authentication successful" }), { status: 200 });
    } catch (err) {
    console.error("LDAP authentication error:", err);
    return new NextResponse(JSON.stringify({ error: "Authentication failed" }), { status: 401 });
    }
   
}

// export default handler;