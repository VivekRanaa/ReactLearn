import React from "react";
 function  NameList() {
     const names=["Vivek", "Abhishek","Rajender","Laxmi"]
     const nameList = names.map((name, index)=><h2 key={index}>{index} {name}</h2>)
    return (
        <>
            {nameList}
        </>
    )
}
export default  NameList
