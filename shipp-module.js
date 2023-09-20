const mysql=require("../helper/mysql")
const md5 = require('md5');
const jwt = require("jsonwebtoken");



let loginUser = (userDetail) => {
    let {email, password} = userDetail;
    let md5Pass = md5(password);

    let query = `SELECT * FROM shipping WHERE email = '${email}' AND password = '${md5Pass}' `;
    console.log(query);
    let promise = new Promise((resolve, reject)=>{
        mysql.connection.query(query, function (error, results, fields) {
          if (error) {
            reject(error);
          } else {
            console.log('The solution is: ', results);

            if(results.length==0){
              reject("Email Id and password Not Match");
            }else{
                    console.log("our token key - ",process.env.TOKENKEY);
                    const token = jwt.sign(
                        { uid: results[0].id, email:results[0].email, fname: results[0].first_name  },
                        process.env.TOKENKEY,
                        {
                            expiresIn: "2h",
                        }
                    );
                    results[0].token = token;       
                    console.log(token);


            }
            resolve(results); 
        }
        });
      });
      return promise;
}


let getAllDetails= async()=> {
    let query=`SELECT * FROM shipping`;

    let promise= new Promise((resolve,reject)=>{
      mysql.connection.query(query, function (error, results, fields) {
        if (error){
          reject(error)
        }else
        {
          console.log('The solution is: ', results);
          resolve(results);
        }
      });
    });
    return promise;
  }

  let getSomeDetails=async(sid)=>{
    let query=`SELECT * FROM shipping where shipping.id=${sid}`;;

    let promise=new Promise((resolve,reject)=>{
      mysql.connection.query(query,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          console.log('The solution is: ', results);
          resolve(results);
        }
      });
    });
    return promise;
  }

  let addShipDetails= async(shipadd)=> {
    let{billing_first_name,billing_last_name,email,password,billing_address,billing_zipcode,billing_country,billing_city,order_id,status,created}=shipadd;
    let query=`INSERT INTO shipping(billing_first_name,billing_last_name,email,password,billing_address,billing_zipcode,billing_country,billing_city,order_id,status,created) VALUES ('${billing_first_name}','${billing_last_name}','${email}','${password}','${billing_address}','${billing_zipcode}','${billing_country}','${billing_city}','${order_id}','${status}',now());`
    let promise= new Promise((resolve,reject)=>{
      mysql.connection.query(query, function (error, results, fields) {
        if (error){
          reject(error)
        }else
        {
          console.log('The solution is: ', results);
          resolve(results);
        }
      });
    });
    return promise;
  }

  let updatShipDetails= async(sid,updateData)=> {
    let{billing_first_name,billing_last_name,billing_zipcode,billing_city}=updateData;
    let query=`UPDATE shipping SET billing_first_name='${billing_first_name}',billing_last_name='${billing_last_name}',billing_zipcode='${billing_zipcode}',billing_city='${billing_city} WHERE shipping.id='${sid}'`;
    let promise= new Promise((resolve,reject)=>{
      mysql.connection.query(query, function (error, results, fields) {
        if (error){
          reject(error)
        }else
        {
          console.log('The solution is: ', results);
          resolve(results);
        }
      });
    });
    return promise;
  }

  let deleteShipDetails= async(sid)=> {
    let query=`DELETE FROM shipping where shipping.id=${sid}`;
    let promise= new Promise((resolve,reject)=>{
      mysql.connection.query(query, function (error, results, fields) {
        if (error){
          reject(error)
        }else
        {
          console.log('The solution is: ', results);
          resolve(results);
        }
      });
    });
    return promise;
  }
  module.exports={getAllDetails,getSomeDetails,addShipDetails,updatShipDetails,deleteShipDetails,loginUser}

